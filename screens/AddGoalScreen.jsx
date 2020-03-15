import React from 'react';
import { Text, Button, TextInput, KeyboardAvoidingView, SafeAreaView, Picker, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import firebase from '../firebase';

// initallize firebase realtime db 
const rootRef = firebase.database().ref();
const goalsRef = rootRef.child('GoalList')

export class AddGoalList extends React.Component {

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


    // when button pressed... 
    onGoal = ({ }) => {
        // if form empty alert user
        if (this.state.goal.trim() && this.state.why.trim() === '') {
            alert("Please fill form.");
            return;
        }
        //alert if category not picked
        if (this.state.category.valueOf() === 'Pick One') {
            alert("Fill in all inputs.");
            return;
        }
        // otherwise push data to firebase and alert user goback back 
        goalsRef.push({
            fireListGoal: this.state.goal,
            fireListCat: this.state.category,
            fireListWhy: this.state.why
        }).then(this.props.navigation.navigate('GoalsScreen'));
        // (alert('Goal Added to your list.'));

    }

    render() {
        return (
            // KeyboardAvoidingView ==> prevent keyboard from overlapping
            <KeyboardAvoidingView style={styles.container}>
                <SafeAreaView>
                <Text>Sparks your life!</Text> 
                    

                    {/* Goal title */}
                    <Text>What is your goal</Text>

                    <TextInput
                        placeholder="Enter your goal"
                        keyboardType='default'
                        onChangeText={
                            (text) => {
                                this.setState({ goal: text });
                            }
                        }
                        value={this.state.goal}
                    />

                    {/* pick selected cetegory */}
                    <Text>Pick a Category</Text>
                    {/* picker component */}
                    <Picker
                        selectedValue={this.state.category}
                        onValueChange={(itemValue) => this.setState({ category: itemValue })} >
                        <Picker.Item label="Pick One" value="Pick One" />
                        <Picker.Item label="Fitness" value="Fitness" />
                        <Picker.Item label="Health" value="Health" />
                        <Picker.Item label="Travel" value="Travel" />
                        <Picker.Item label="Wealth" value="Wealth" />
                        <Picker.Item label="Creativity" value="Creativity" />
                        <Picker.Item label="Skills" value="Skills" />
                    </Picker>

                    <Text>Why did you pick this goal?</Text>

                    <TextInput
                        placeholder="Enter your why"
                        keyboardType='default'
                        onChangeText={
                            (text) => {
                                this.setState({ why: text });
                            }
                        }
                        value={this.state.why}
                    />

                    {/* nav back to My Goal list */}
                    <Button title="Add Goal" onPress={this.onGoal.bind(this)} />
                </SafeAreaView>
            </KeyboardAvoidingView>

        );
    }
}

// cant use state w/ functions and cant pass navagation in class, this is solution
export const AddGoalScreen = ({ navigation }) => {

    return (
        <View>
            {/* add goal component (inputs) */}
            <AddGoalList />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginLeft: 5,
        marginRight: 5,
    },

})