import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import firebase from '../firebase';
import { Center } from '../components/Center'

//news feed page of user 
export default class FeedScreen extends React.Component {
    
    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        //gets data from from firebase and puts in values 
        this.setState({ email, displayName });
    }

    //log out 
    signOutUser = () => {
        firebase.auth().signOut();
    };

    //news feed views 
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Hi this is the news feed under construction!</Text>

                {/* log out func */}
                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>

        );
    }

}

// //style sheet 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});