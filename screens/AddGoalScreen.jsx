import React, { Component } from 'react'
import { connect } from 'react-redux';
import {goalUpdate}  from '../actions/GoalActions';
import { Text, Button, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';

export const AddGoalScreen = ({navigation}) => {

    // set states 
    state = {
        goal: '', 
        category: '', 
        why: '', 
    }

    return( 
        // KeyboardAvoidingView ==> prevent keyboard from overlapping
        <KeyboardAvoidingView>
            <SafeAreaView>
                <Text>Add a Goal</Text>

                <Text>what is your goal</Text>
                <TextInput placeholder="my goal..." lable="Goal" value={this.state.goal} onChangeText={goal => this.setState({ goal })}></TextInput>

                <Text>Pick a Category</Text>
                {/* <TextInput placeholder="ass..?"  lable="Category" value={this.props.category}></TextInput> */}

                <Text>Why did you pick this goal?</Text>
                <TextInput placeholder="Because..."  lable="Why" value={this.state.why} value={this.state.why} onChangeText={why => this.setState({ why })}></TextInput>
                
                {/* Add goal and nav back to My Goal list */}
                <Button title="add goal" onPress={()=>navigation.navigate("GoalsScreen")}/> 
                
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

