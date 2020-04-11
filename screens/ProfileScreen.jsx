import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import firebase from '../firebase';
import { Center } from '../components/Center'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import image2 from '../assets/fitimg2.jpg';

//news feed page of user 
export default class ProfileScreen extends React.Component {

    // email and username
    state = {
        email: "",
        displayName: ""
    }

    // auth logout function 
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        //gets data from from firebase and puts in values 
        this.setState({ email, displayName });
    }

    //log out 
    signOutUser = () => {
        firebase.auth().signOut();
    };



    //profile screen 
    render() {
        return (
            <LinearGradient
                colors={['#0D98BA', '#0D52BA']}
                style={{ flex: 1 }}>

                <SafeAreaView style={styles.container}>

                    <Image
                        style={styles.logo}
                        source={require('../assets/user.png')}

                    />
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={styles.userName}>
                            @MCHAYA_14
                         </Text>

                        <Text style={styles.level}>
                            LV.2
                    </Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={styles.editProfile}>
                            Edit Profile
                    </Text>

                        <Text style={styles.points}>
                            Points:4
                    </Text>
                        {/* log out func */}
                        <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                            <Text style={{ color: 'red',}}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={styles.trophyBorder}>
                            <Image
                                style={styles.trophy}
                                source={require('../assets/trophy-icon-1.png')}

                            />
                        </View>

                        <Image
                            style={styles.badge}
                            source={require('../assets/achievment-icon.png')}

                        />
                    </View>

                    <View style={styles.goalsAccomplished}>
                        <Text style={styles.goalsText}>
                            Goals Accomplished: 1
                        </Text>
                    </View>

                    {/* video container added animation*/}
                    <View>
                        <Animatable.View style={styles.box} animation="bounceIn" easing="ease">

                            <Text style={styles.title}>Weight Loss</Text>
                            <Center>
                                <Image
                                    style={{ width: 200, height: 150 }}
                                    source={image2}
                                />
                            </Center>


                            <Text style={{ color: 'white', paddingLeft: 80 }}>Goal Completed <FontAwesome5 name={'check'} solid /></Text>
                        </Animatable.View>
                    </View>




                </SafeAreaView>
            </LinearGradient>
        );
    }
}



// //style sheet not in use 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",


    },

    logo: {
        width: 80,
        height: 80,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 50
        // justifyContent: "center",
        // alignItems: "center",

    },
    userName: {
        margin: 20,
        fontSize: 30,
        color: 'white',
        justifyContent: 'flex-start'

    },

    level: {
        margin: 20,
        fontSize: 30,
        color: 'white',
        justifyContent: 'flex-end'

    },

    editProfile: {
        fontSize: 15,
        color: 'white',
        justifyContent: 'flex-start',
        paddingRight: 100,
    },

    points: {
        fontSize: 15,
        color: 'white',
        justifyContent: 'flex-end',
        paddingLeft: 100,
    },
    trophy: {

        marginTop: 70,
        marginRight: 70,
        marginLeft: 70,
        marginBottom: 20,
        // padding: 50,
        width: 50,
        height: 60,

    },

    trophyBorder: {
        borderBottomWidth: 5,
        borderBottomColor: 'orange'
    },

    badge: {
        marginTop: 70,
        marginRight: 70,
        marginLeft: 70,
        // padding: 50,
        width: 50,
        height: 60

    },

    goalsAccomplished: {
        marginTop: 50,
        paddingLeft: 30
    },

    goalsText: {
        color: 'white',
        fontSize: 20,
    },

    box: {
        width: "50%",
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 10,
        height: 200,
        // padding: 30,
        // marginBottom: 20,
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

    videoBox: {
        width: 300,
        height: 300,
        marginTop: 10,
    },

    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

});
