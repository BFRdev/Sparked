import React from 'react';
import { Center } from '../components/Center';
import { Text, View, StyleSheet, TextInput, FlatList, Dimensions, Keyboard, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/Logo.png';

import FitnessSearch from './FitnessSearch';
import TravelScreen from './TravelSearch';


// search array
const listItems = ['Fitness', 'Travel', 'Diet', 'Music', 'Art', 'Hobby', 'Sports', 'Personal']
//screen dimensions 
const screenWidth = Dimensions.get('screen').width;

// navagation contolller 
const Stack = createStackNavigator();
export default function SearchStack() {
    return (
        <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    // customize header
                    title: 'Search', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
            <Stack.Screen name="FitnessSearch" component={FitnessSearch}
                options={{
                    // customize header
                    title: 'Fitness', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
            <Stack.Screen name="TravelScreen" component={TravelScreen}
                options={{
                    // customize header
                    title: 'Travel', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
        </Stack.Navigator>
    );
}


export class SearchScreen extends React.Component {

    state = {
        searchBarFocused: false
    }

    componentDidMount() {
        //for keyboard 
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }
    keyboardDidShow = () => { this.setState({ searchBarFocused: true }) }
    keyboardWillShow = () => { this.setState({ searchBarFocused: true }) }
    keyboardWillHide = () => { this.setState({ searchBarFocused: false }) }

    render() {
        return (
            <LinearGradient
                colors={['#0D98BA', '#0D52BA']}
                style={{ flex: 1 }}>
                <SafeAreaView style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)', flex: 1 }}>
                    <Center>

                        <Image
                            source={logo}
                            style={styles.sparkLogo} />
                        <View style={styles.searchInput}>
                            <Icon name="ios-search" style={{ fontSize: 24 }} />
                            <TextInput placeholder='Search Sparks' style={styles.searchText} />
                        </View>

                        <FlatList
                            data={listItems}
                            numColumns={2}
                            renderItem={({ item }) => <Animatable.View animation="bounceIn" easing="ease-out">
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('FitnessSearch')}>
                                    <Text style={styles.categoryButton}>{item}</Text></TouchableOpacity>
                            </Animatable.View>}
                            keyExtractor={(item, index) => index.toString()} />
                    </Center>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}

//style sheet 
const styles = StyleSheet.create({
    sparkLogo: {
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: "center",
        height: 100,
        marginTop: 20,
        marginBottom: 30
    },
    searchInput: {
        width: screenWidth / 1.1,
        height: 50,
        backgroundColor: '#EF9D53',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#EF9D53',
        borderWidth: 2,
        marginBottom: 50,
        //shadow depth
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    searchText: {
        fontSize: 24,
        marginLeft: 15
    },
    categoryButton: {
        fontSize: 20,
        backgroundColor: '#EF9D53',
        color: 'black',
        width: screenWidth / 2.5,
        height: 55,
        padding: 15,
        margin: 15,
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: '#51BA65',
        borderRadius: 10,
        borderWidth: 3,
        //shadow depth
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.46,

        elevation: 9,
    }
});