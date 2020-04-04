import React, { Component } from 'react'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/inLine';
import { AddGoalList } from '../screens/AddGoalScreen'
import { LaunchScreen } from './LaunchScreen';
import firebase from '../firebase';

import { LinearGradient } from 'expo-linear-gradient';

const rootRef = firebase.database().ref('GoalList/');


const Stack = createStackNavigator();

export class GoalsScreen extends Component {
  // state and defult values
  constructor(props) {
    super(props)

    // set inital values
    this.state = ({
        listArray: [],
        goal: '',
        category: 'Pick One',
        why: '',
        height: 0
    }); 
}

    //triggers rerendering, put values in a JSON array
    componentDidMount() {

        rootRef.on('value', (childSnapshot) => {
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
    };

    // delete goals ERROR deletes all records. 
    deleteGoal = () => {
        // const goalsRef = rootRef.child('key');     
        //     rootRef.child('GoalList/' + key).remove(); 
            console.log("removed"); 

    };

    render() {
        return (
            <LinearGradient
            colors={['#ef9d53', '#cc8545']}
            style={styles.container}>
                <SafeAreaView>
                    <Header>
                        {/* header title */}
                        <Text style={styles.goalText}>Your Goals</Text>

                        {/* add goal button goto stack */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddGoal')}>
                            <Text style={styles.addBtn}> + </Text>
                            </TouchableOpacity>

                    </Header>
                        {/* {console.log(this.state.listArray)} */}
                    <FlatList
                    data={this.state.listArray}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.list}>
                                <Text style={{ fontSize: 35, color:'white' }}>Goal: {item.fireListGoal}</Text>
                                <Text style={{ fontSize: 20, color:'white' }}>Aspect: {item.fireListCat}</Text>
                                <Text style={{ fontSize: 15, color:'white' }}>Why: {item.fireListWhy}</Text>
                                <TouchableOpacity onPress={() => this.deleteGoal() }><Text style={{ color:'white' }}>Delete</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LaunchScreen')}><Text style={{ color:'white' }}>Post Update</Text></TouchableOpacity>
                            </View>
                            );
                        }} keyExtractor={({item}, index) => index.toString()}>
                </FlatList>
                </SafeAreaView>
            </LinearGradient>
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
                    //headerShown: false, 
                    title: 'Update Progress', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
        </Stack.Navigator>
    );
}

// style sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },
    addBtn: {
        fontSize: 40,
        color: 'white',
        shadowColor: '#0D52BA',
        shadowOpacity: 0.5,
    },
    goalText: {
        fontSize: 25,
        color:'white',
    },
    list: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        color:'white'
    }
}); 