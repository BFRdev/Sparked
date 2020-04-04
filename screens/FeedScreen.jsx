

import React, { useState, useEffect } from 'react'
import { FlatList, View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from '../components/inLine';
import { Video } from 'expo-av';
import firebase from '../firebase'
const videoRef = firebase.database().ref('videoCollaction');

export const FeedScreen = ({ }) => {

    // put data in this array 
    var [videoArray, setVideo] = useState([]);
    // access firebase data 
    useEffect(() => {
        const videoArray = []; // temp array
        videoRef.on("value", childSnapshot => {
            childSnapshot.forEach(doc => {
                videoArray.push({
                    key: doc.key,
                    video: doc.toJSON().video
                });
            });
            setVideo(videoArray); // update state array
        });
    }, []);
    //for debuging 
    //console.log("after use effect", videoArray)

    //destructure URI's and log in console
    const videoUris = videoArray.map(item => item.video.uri)
    console.log("URI's:", videoUris);

    //get data 
    const renderItem = ({ item }) => {
        console.log(item);

        return (
            // data layout 
            <SafeAreaView>
               
                {/* <Text>key: {item.key}</Text> */}
                <Text>Video: </Text>
                {/* <Text>video: {item.video.uri}</Text> */}
                <Video
                    source={{ uri: item.video.uri }}
                    shouldPlay
                    isMuted
                    resizeMode="cover"
                    style={{ width: 300, height: 300 }}
                    useNativeControls={true}
                    isLooping={true}
                />
              <TouchableOpacity onPress={() => console.log('pressed')}><Text style={{ color:'blue' }}>Button</Text></TouchableOpacity>
            </SafeAreaView>
        );
    };

    return (
        <View style={styles.container}>
            {/* render videos in a flat list */}
            <FlatList
                data={videoArray} // The state data
                keyExtractor={item => item.key} //defines keys 
                renderItem={renderItem} // RENDERS videos renderItem function
            />
        </View>
    );
};

// return (
//     <SafeAreaView>
//         <Text>Feed Screen</Text>
//         {/* array values here */}

// <FlatList
//         data={videoArray}
//         renderItem={({ item, index }) => {
//             return (
//                 <View>
//                     <Text style={{ fontSize: 25, color:'red' }}>Goal</Text>
//                     <Video
//                         source={{ uri: 'file:///var/mobile/Containers/Data/Application/6D4BF03E-4E53-481A-AF86-55C6B702B6B0/Library/Caches/ExponentExperienceData/%2540ameer_devking%252Fspark-app/Camera/BADB80A8-27E9-4BDD-9779-81CC356B6F93.mov'}}
//                         // shouldPlay={shouldPlay}
//                         // isMuted={mute}
//                         resizeMode="cover"
//                         style={{ width: 300, height: 300 }}
//                         useNativeControls={true}
//                         isLooping={true}
//                     />

//                     <TouchableOpacity onPress={() => console.log('pressed')}><Text style={{ color:'blue' }}>Button</Text></TouchableOpacity>
//                 </View>
//                 );
//             }} keyExtractor={({item}, index) => index.toString()}>
//     </FlatList>

//    // );
//}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    }
});