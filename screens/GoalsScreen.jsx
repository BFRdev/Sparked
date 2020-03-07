import React from 'react'
import { Center } from '../components/Center'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, View } from 'react-native'

import GoalsList from '../components/goalList';


export const GoalsScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            {/* header title */}
            <Text style={styles.goalText}> Your Goals</Text>
            {/* add goal button goto stack */}
            <TouchableOpacity onPress={()=> navigation.push("AddGoal")} >
                <Text style={styles.addBtn}> + </Text>
            </TouchableOpacity>

            {/* goal list component */}
            <GoalsList />
        </SafeAreaView>
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