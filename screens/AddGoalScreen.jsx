import React from 'react'
import { connect } from 'react-redux';
import { goalUpdate } from '../actions/GoalActions';
import { Text, Button, TextInput, KeyboardAvoidingView, SafeAreaView, Picker, View, StyleSheet } from 'react-native';


export class AddGoalList extends React.Component {

    // state and defult values
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
            <KeyboardAvoidingView style={styles.container}>
                <SafeAreaView>
                    <Text>Sparks your life!</Text>

                    {/* Goal title */}
                    <Text>what is your goal</Text>
                    <TextInput placeholder="my goal..." lable="Goal" value={this.state.goal} onChangeText={goal => this.setState({ goal })}></TextInput>

                    {/* pick selected cetegory */}
                    <Text>Pick a Category</Text>
                    {/* picker component */}
                    <Picker
                        selectedValue={this.state.category}
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

                {/* log list in console PROOF of values passed*/}
                {console.log(this.state.goal)}
                {console.log(this.state.category)}
                {console.log(this.state.why)}

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
            {/* nav back to My Goal list */}
            <Button title="add goal" onPress={() => navigation.navigate("GoalsScreen")} />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginLeft: 20,
    
    },
})

