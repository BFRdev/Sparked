import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import firebase from '../servers/firebase';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/Logo.png';

const screenWidth = Dimensions.get('screen').width;

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
            <KeyboardAvoidingView style={styles.container}>
                <LinearGradient
                    colors={['#1893A3', '#0D52BA']}
                    style={styles.container}>

                    <Image source={logo}
                        style={styles.sparkLogo}
                    />

                    <Text style={styles.greeting}>
                        Welcome back
                    </Text>

                    <View style={styles.form}>
                        <View>

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style={{ marginTop: 15 }}>

                            <TextInput style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            ></TextInput>
                        </View>
                    </View>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>

                        <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "500" }}>Sign in</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Register")}>

                        <Text style={{ color: "#FFF", fontSize: 16 }}>
                            New to Sparked?
                        <Text style={{ fontWeight: "500", color: "#EF9D53" }}>{' '}Sign Up</Text>
                        </Text>

                    </TouchableOpacity>

                </LinearGradient>
            </KeyboardAvoidingView>



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
        fontSize: 30,
        color: "#FFF",
        textAlign: "center",
        marginBottom: 60
    },
    form: {
        marginHorizontal: 30
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#EF9D53',
        borderWidth: 3,
        marginHorizontal: screenWidth / 12,
        marginTop: 2.5,
        padding: 10,
        height: 45,
        width: screenWidth / 1.5,
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
        width: screenWidth / 2,
        marginHorizontal: screenWidth / 4,
        marginTop: 30,
        backgroundColor: "#EF9D53",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});