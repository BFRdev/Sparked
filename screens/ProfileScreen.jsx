
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import firebase from '../firebase';
import { Center } from '../components/Center'

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
            <Center>
                <Text>Profile Screen</Text>
                {/* log out func */}
                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </Center>
           
        );
    }

}

// //style sheet not in use 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// });