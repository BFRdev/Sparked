import React from 'react'
import {Center} from '../components/Center'
import { Text, View, StyleSheet, TextInput, FlatList, Dimensions, Keyboard, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import logo from '../assets/Logo.png';

const listItems = ['Fitness','Travel','Diet','Music','Art','Hobby','Sports','Personal']
const screenWidth = Dimensions.get('screen').width;

export class SearchScreen extends React.Component {
    state = {
        searchBarFocused: false
    }
    componentDidMount(){
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow',this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow',this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide',this.keyboardWillHide)
    }
    keyboardDidShow = () => {this.setState({ searchBarFocused: true })}
    keyboardWillShow = () => {this.setState({ searchBarFocused: true })}
    keyboardWillHide = () => {this.setState({ searchBarFocused: false })}

    render(){
        return(
            <LinearGradient
            colors={['#0D98BA', '#0D52BA']}
            style={{flex: 1}}>
                <View style={{backgroundColor: this.state.searchBarFocused?'rgba(0,0,0,0.3)':'rgba(0,0,0,0)', flex: 1}}>
                <Center>
                    <Image
                    source={logo}
                    style={styles.sparkLogo}/>
                    <View style = {styles.searchInput}>
                        <Icon name = "ios-search" style={{fontSize: 24}}/>
                        <TextInput placeholder='Search' style = {styles.searchText}/>
                    </View>
                    <FlatList
                    data = {listItems}
                    numColumns = {2}
                    renderItem={({ item }) => <Text style={styles.categoryButton}>{item}</Text>}
                    keyExtractor = {(item, index) => index.toString()}/>                
                </Center>
                </View>
           </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    sparkLogo: {
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: "center",
        height:70,
        marginTop:50,
        marginBottom: 40
    },
    searchInput: {
        width: screenWidth/1.1,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'orange',
        borderWidth: 3,
        marginBottom:50
    },
    searchText: {
        fontSize: 24,
        marginLeft: 15
    },
    categoryButton: {
        fontSize: 20,
        backgroundColor:'white',
        color:'black',
        width: screenWidth/2.5,
        height:55,
        padding:15,
        margin:10,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 3,
    }
});