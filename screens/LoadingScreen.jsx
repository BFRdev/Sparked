import React from 'react'
import {Text, ActivityIndicator} from 'react-native'
import firebase from '../servers/firebase'
import { Center } from '../components/Center';

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }
    
    
    render() {
        return (
            <Center>
                <Text>Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </Center>

        );
    }

}
