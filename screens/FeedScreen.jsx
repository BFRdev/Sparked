

import React, { useState, useEffect } from 'react'
import { FlatList, View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Video } from 'expo-av';
import firebase from '../firebase'
import { Center } from '../components/Center';
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
            <SafeAreaView style={styles.container}>
                {/* video container added animation*/}
                <Animatable.View style={styles.box} animation="slideInDown" easing="ease">
                    <Text style={styles.title}>Spark</Text>
                    <Center>
                        <Video 
                            source={{ uri: item.video.uri }}
                            shouldPlay
                            isMuted
                            resizeMode="cover"
                            style={styles.videoBox}
                            useNativeControls={true}
                            isLooping={true}
                        />
                    </Center>
                <TouchableOpacity onPress={() => console.log('pressed')}><Text style={styles.btn}>Applaud👏</Text></TouchableOpacity>
                
              </Animatable.View>
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    box: {
        width: "100%",
        padding: 30,
        marginTop: 20,
        marginBottom: 20,
        color: 'white',
        backgroundColor: '#0D52BA',
        borderRadius: 10,
        //shadow depth
        shadowColor: "#EF9D53",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5.46,
        elevation: 4,
    },

    //list items 
    videoBox: {
        width: 300,
        height: 300,
        marginTop: 10,
    },

    title: {
        fontSize: 20,
        color: 'white',
    },

    desc: {
        fontSize: 15,
        paddingBottom: 10,
        color: 'white',
    },

    btn: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        color: '#EF9D53',
    },
});
