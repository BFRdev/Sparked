import React from 'react'
import { Center } from '../components/Center'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Header} from '../components/Header';

// import screens
import GoalsList from '../components/goalList';

import {AddGoalScreen} from './AddGoalScreen';

const Stack = createStackNavigator();


// goal list 
export const GoalsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header>
                {/* header title */}            
                <Text style={styles.goalText}> Expand your life</Text>

                {/* add goal button goto stack */}
                <TouchableOpacity onPress={() => navigation.navigate("AddGoal")} >
                    <Text style={styles.addBtn}> + </Text>
                </TouchableOpacity>
            </Header>


            {/* goal list component */}
            <GoalsList />
        </SafeAreaView>
    );

}

// stack nav goal list to add goal
export default function GoalsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GoalsScreen" component={GoalsScreen}
                options={{
                    // customize header
                    title: 'My Sparks', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
            <Stack.Screen name="AddGoal" component={AddGoalScreen}
                options={{
                    // customize header
                    title: 'Add Sparke', headerTintColor: '#0D52BA', headerStyle: { backgroundColor: '#EF9D53' }
                }} />
        </Stack.Navigator>
    );
}


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
    }
})