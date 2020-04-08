import React from 'react';
import { Center } from '../components/Center'
import { Text, View, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

//import images 
import image1 from '../assets/fitimg1.jpg';
import image2 from '../assets/fitimg2.jpg';
import image3 from '../assets/fitimg3.jpg';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Reducer } from 'react-native-router-flux';


export default function FitnessSearch({ navigation }) {

    //content object 
    const objects = [
        {
            key: "-1",
            title: "Max Deadlift",
            img: image1,
            desc: "I have spent the last 5 years working toward this.",
        },
        {
            key: "-2",
            title: "Lifting heavy",
            img: image2,
            desc: "For cardio to lifting heavy has changed my life.",
        },
        {
            key: "-3",
            title: "COVID-19 Boxing",
            img: image3,
            desc: "You need to defend yourself during an pansemic.",
        }
    ];

    // format content 
    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <SafeAreaView style={styles.box}>
                <Animatable.View animation="zoomInUp" >
                    <Center>
                        <Image
                            style={styles.thumbnail}
                            source={item.img}
                        />
                        <Text style={styles.title}> {item.title} </Text>

                        <Text style={styles.desc}> {item.desc} </Text>
                    </Center>
                    <TouchableOpacity onPress={()=> console.log('like press')}>
                        <Text style={styles.btn}> Applaud👏 </Text>
                    </TouchableOpacity>
                </Animatable.View>
            </SafeAreaView>
        );
    };

    return (
        //list content 
        <FlatList
            data={objects} // The state data
            keyExtractor={item => item.key}
            renderItem={renderItem} // renderItem function (content)
        />

    );
};

const styles = StyleSheet.create({
    //each container
    box: {
        padding: 30,
        marginTop: 20,
        marginHorizontal: 16,
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
    thumbnail: {
        width: 250,
        height: 200,
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
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 20,
        color: '#EF9D53',
    },

});