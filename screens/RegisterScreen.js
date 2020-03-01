import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import firebase from '../firebase'


export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        user: "",
        password: "",
        errorMessage: null
    };

    // sign up function 
    handleSignUp = (navigation) => {
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
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    {'Sparked \nSign up to get started.'}
                </Text>
            
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none" 
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none" 
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>User Name</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none" 
                        onChangeText={user => this.setState({ user })}
                        value={this.state.user}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}> Password </Text>
                        <TextInput style={styles.input} 
                        secureTextEntry  
                        autoCapitalize="none" 
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                {/* this.handleSignUp.then, () => this.props.navigation.navigate("Category")} */}
                {/* signup process (fix) */}
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
                </TouchableOpacity>

                {/* back to login */}
                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}  onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ color: "#FFF", fontSize: 13}}>
                        Already have a Sparked account? <Text style={{fontWeight: "500", color: "#EF9D53"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>

           

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1893A3"
    
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"

    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#FFF",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#FFF",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#FFF",
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#EF9D53",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});