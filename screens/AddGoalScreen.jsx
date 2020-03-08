import React from 'react'
import { connect } from 'react-redux';
import { goalUpdate } from '../actions/GoalActions';
import { Text, Button, TextInput, KeyboardAvoidingView, SafeAreaView, Picker, View } from 'react-native';


export class AddGoalList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goal: '',
            category: '',
            why: '',
        }
    }
    render() {
        return (

            // KeyboardAvoidingView ==> prevent keyboard from overlapping
            <KeyboardAvoidingView>
                <SafeAreaView>
                    <Text>ADD GOAL</Text>

                    <Text>what is your goal</Text>
                    <TextInput placeholder="my goal..." lable="Goal" value={this.state.goal} onChangeText={goal => this.setState({ goal })}></TextInput>

                    <Text>Pick a Category</Text>
                    {/* picker component */}
                    <Picker
                        selectedValue={this.state.category}
                        // onValueChange={category => this.setState({ category }).handleChange.bind(this)}
                        onValueChange={(itemValue) => this.setState({ category: itemValue })}
                    >
                        <Picker.Item label="Fitness" value="Fitness" />
                        <Picker.Item label="Health" value="Health" />
                        <Picker.Item label="Travel" value="Travel" />
                        <Picker.Item label="Wealth" value="Wealth" />
                        <Picker.Item label="Creativity" value="Creativity" />
                        <Picker.Item label="Skills" value="Skills" />

                    </Picker>

                    <Text>Why did you pick this goal?</Text>
                    <TextInput placeholder="Because..." lable="Why" value={this.state.why} value={this.state.why} onChangeText={why => this.setState({ why })}></TextInput>



                </SafeAreaView>
            </KeyboardAvoidingView>

        );
    }
}

export const AddGoalScreen = ({ navigation }) => {


    return (
        <View>
            <AddGoalList />
            {/* Add goal and nav back to My Goal list */}
            <Button title="add goal" onPress={() => navigation.navigate("GoalsScreen")} />
        </View>


    );
}


