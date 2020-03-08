import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions,KeyboardAvoidingView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/Logo.png';

import firebase from '../servers/firebase'

const screenWidth = Dimensions.get('screen').width;



export default class RegisterScreen extends React.Component {
    // remove stack header
       static navigationOptions = {
        headerShown: false,
      };
      
    state = {
        name: "",
        email: "",
        user: "",
        password: "",
        errorMessage: null
    };

    // sign up function 
    handleSignUp = ({navigation}) => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    };

    // render on screen
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <LinearGradient
                colors={['#1893A3', '#0D52BA']}
                style={styles.container }>
                    <Image source={logo}
                    style={styles.sparkLogo}
                    />

                    <Text style={styles.greeting}>
                        Sign up to get started
                    </Text>

                    <View style={styles.form}>
                        <View>
                            <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            autoCapitalize='none'
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                            ></TextInput>
                        </View>

                        <View>
                            <TextInput 
                            style={styles.input} 
                            placeholder='Email'
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            ></TextInput>
                        </View>

                        <View>
                        <TextInput 
                            style={styles.input} 
                            placeholder='User Name'
                            autoCapitalize="none" 
                            onChangeText={user => this.setState({ user })}
                            value={this.state.user}
                            ></TextInput>
                        </View>

                        <View>
                            <TextInput style={styles.input} 
                            secureTextEntry 
                            placeholder='Password' 
                            autoCapitalize="none" 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    {/* this.handleSignUp.then, () => this.props.navigation.navigate("Category")} */}
                    {/* signup process (fix) */}
                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 20 }}>Sign up</Text>
                    </TouchableOpacity>

                    {/* back to login */}
                    <TouchableOpacity style={{alignSelf: "center", marginTop: 1}}  onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{ color: "#FFF", fontSize: 16}}>
                        Already have a Sparked account? <Text style={{fontWeight: "500", color: "#EF9D53"}}>Login</Text>
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1    
    },
    sparkLogo: {
        resizeMode: 'center',
        justifyContent: "center",
        marginHorizontal: -310,
        marginTop: 0,
        marginBottom: -100
    },
    greeting: {
        fontSize: 30,
        color: "#FFF",
        textAlign: "center",
        marginBottom:10
    },

    form: {
        marginHorizontal: 30
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#EF9D53',
        borderWidth: 3,
        marginHorizontal: screenWidth/12,
        marginTop:15,
        padding: 10,
        height: 45,
        width: screenWidth/1.5,
        fontSize: 15,
        color: 'black',
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#FF5D5D",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    },
    button: {
        width: screenWidth/2,
        marginHorizontal: screenWidth/4,
        marginBottom:15,
        backgroundColor: "#EF9D53",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});