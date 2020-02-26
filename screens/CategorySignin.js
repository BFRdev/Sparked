import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import * as firebase from 'firebase'
import CategoryList from '../components/categoryList'; 

export default class CategorySignin extends React.Component {
    state = {
        email: "",
        displayName: ""
    }


    componentDidMount() {
        const {email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
        
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };




    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Hi {this.state.displayName}!</Text>
                <CategoryList></CategoryList>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});