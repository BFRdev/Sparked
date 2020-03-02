import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import firebase from '../firebase'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/Logo.png';


export default class LoginScreen extends React.Component {

    // remove stack header
    static navigationOptions = {
        headerShown: false,
      };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));

    };

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#1893A3', '#0D52BA']}
                    style={styles.container}>

                    <Image source={logo}
                        style={styles.sparkLogo}
                    />

                    {/* <Text style={styles.greeting}>
                        Welcome back.
                    </Text> */}

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.form}>
                        <View>

                            <TextInput
                                style={styles.emailInput}
                                placeholder="Email"
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 15 }}>

                            <TextInput style={styles.passwordInput}
                                placeholder="Password"
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>

                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Register")}>

                        <Text style={{ color: "#FFF", fontSize: 13 }}>
                            New to Sparked?
                        <Text style={{ fontWeight: "500", color: "#EF9D53" }}> Sign Up</Text>
                        </Text>

                    </TouchableOpacity>

                </LinearGradient>
            </View>



        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sparkLogo: {
        resizeMode: 'center',
        justifyContent: "center",
        marginHorizontal: -310,
        marginTop: 0,
        marginBottom: -100

    },
    greeting: {
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
    emailInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: '#EF9D53',
        borderWidth: 5,
        padding: 10,
        height: 45,
        fontSize: 15,
        color: 'black'
    },
    passwordInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: '#EF9D53',
        borderWidth: 5,
        padding: 10,
        height: 45,
        fontSize: 15,
        color: 'black'
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