import React, { Component } from 'react'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, View, Button, KeyboardAvoidingView, TextInput, Picker } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/inLine';
import { AddGoalList } from '../screens/AddGoalScreen'
import { LaunchScreen } from './LaunchScreen'; 
import firebase from '../firebase';
const rootRef = firebase.database().ref();
const goalsRef = rootRef.child('GoalList')

const Stack = createStackNavigator();


export class GoalsScreen extends Component {
      // state and defult values
      constructor(props) {
        super(props)

        // set inital values
        this.state = {
            listArray: [],
            goal: '',
            category: 'Pick One',
            why: '',
        }
    }

       //triggers rerendering, put values in a JSON array
       componentDidMount() {
        goalsRef.on('value', (childSnapshot) => {
            const listArray = [];
            childSnapshot.forEach((doc) => {
                listArray.push({
                    key: doc.key,
                    fireListGoal: doc.toJSON().fireListGoal,
                    fireListCat: doc.toJSON().fireListCat,
                    fireListWhy: doc.toJSON().fireListWhy
                });
                this.setState({
                    listArray: listArray.sort((a, b) => {
                        return (
                            a.fireListGoal < b.fireListGoal,
                            a.fireListCat < b.fireListCat,
                            a.fireListWhy < b.fireListWhy
                        );

                    }),
                });
            });
        });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header>
                    {/* header title */}
                    <Text style={styles.goalText}> Expand your life</Text>

                    {/* add goal button goto stack */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddGoal')}>
                        <Text style={styles.addBtn}> + </Text>
                    </TouchableOpacity>
                </Header>

                <FlatList
                    data={this.state.listArray}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.list}>
                                <Text style={{ fontSize: 25 }}>Goal: {item.fireListGoal} </Text>
                                <Text style={{ fontSize: 20 }}>Aspect: {item.fireListCat}</Text>
                                <Text style={{ fontSize: 15 }}>Why: {item.fireListWhy}</Text>
                                <TouchableOpacity onPress={() => console.log('delete')}><Text>Delete</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LaunchScreen')}><Text>Update</Text></TouchableOpacity>
                            </View>
                        );
                    }}
                >
                </FlatList>

            </SafeAreaView>

        );
    }
}


// STACK nav goal list < = > add goal // 
export default function GoalsStack() {
    return (
        <Stack.Navigator initialRouteName="GoalsScreen">
            <Stack.Screen name="GoalsScreen" component={GoalsScreen}
                options={{
                    // customize header
                    title: 'My Sparks', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
            <Stack.Screen name="AddGoal" component={AddGoalList}
                options={{
                    // customize header
                    title: 'Add Sparke', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
                {/* goto launch screen */}
                 <Stack.Screen name="LaunchScreen" component={LaunchScreen}
                options={{
                    // customize header
                    headerShown:false, title: 'Update Progress', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
        </Stack.Navigator>
    );
}

// style sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addBtn: {
        fontSize: 40,
        color: '#EF9D53',
    },
    goalText: {
        fontSize: 25,
    },
    list: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#0D52BA',
        shadowOpacity: 0.5, 
    }
}); 