import React from 'react'
import { Center } from '../components/Center'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'


export const GoalsScreen = ({ }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* header title */}
            <Text style={styles.goalText}>Your Goals</Text>
            {/* add goal button goto stack */}
            <TouchableOpacity onPress={() => console.log('tap')}>
                <Text style={styles.addBtn}>+</Text>
            </TouchableOpacity>
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