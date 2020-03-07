import React from 'react'
import { Center } from '../components/Center'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import AddGoalScreen from './AddGoalScreen';

import GoalsList from '../components/goalList';
import { NavigationActions } from 'react-navigation';

const Stack = createStackNavigator();


export const GoalsScreen = ({ }) => {

    return (
        <SafeAreaView style={styles.container}>
            {/* header title */}
            <Text style={styles.goalText}> Your Goals</Text>
            {/* add goal button goto stack */}
            <TouchableOpacity onPress={()=> { navigation.navigate("addGoal", {
                        name: goal
                    }); }} >
                <Text style={styles.addBtn}> + </Text>
            </TouchableOpacity>

            {/* goal list component */}
            <GoalsList />
        </SafeAreaView>
    );

}

export const GoalStackNav = ({ }) => {

    return(
    <Stack.Navigator initialRouteName="goalsScreen">
        <Stack.Screen name="goalsScreen" component={GoalsScreen}/>
        <Stack.Screen name="addGoal" component={AddGoalScreen}/>

    </Stack.Navigator>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addBtn: {
        fontSize: 40,
    },
    goalText: {
        fontSize: 30,
    }
})