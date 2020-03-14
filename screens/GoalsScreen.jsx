import React, { useState } from 'react'
import { Center } from '../components/Center'
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, View, Button, KeyboardAvoidingView, TextInput, Picker } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components/inLine';
import firebase from '../firebase';
const rootRef = firebase.database().ref();
const goalsRef = rootRef.child('GoalList')

const Stack = createStackNavigator();



// export const ListerA = ({ }) => {

  

//     return (

//         <FlatList
//             data={this.state.listArray}
//             renderItem={({ item, index }) => {
//                 return (
//                     <View>
//                         <Text style={{ fontSize: 30 }}>{item.fireListGoal} </Text>
//                         <Text style={{ fontSize: 20 }}>{item.fireListCat}</Text>
//                         <Text style={{ fontSize: 15 }}> {item.fireListWhy}</Text>
//                     </View>
//                 );  
//             }}
//         >
//         </FlatList>

//     );

// }



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
        if (this.state.category.valueOf() === 'Pick One') {
            alert("Fill in all inputs.");
            return;
        }
        // otherwise push data to firebase
        goalsRef.push({
            fireListGoal: this.state.goal,
            fireListCat: this.state.category,
            fireListWhy: this.state.why
        });
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
                        onValueChange={(itemValue) => this.setState({ category: itemValue })}
                    >
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
                    <Button title="add goal" onPress={this.onGoal.bind(this)} />
                </SafeAreaView>
                
                {/* remove list here and add to other GoalsScreen */}
                <FlatList 
                    data={this.state.listArray}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.list}> 
                                <Text style={{fontSize: 25}}>Goal: {item.fireListGoal} </Text>
                                <Text style={{fontSize: 20}}>Aspect: {item.fireListCat}</Text>
                                <Text style={{fontSize: 15}}>Why: {item.fireListWhy}</Text>
                                <TouchableOpacity onPress={console.log('delete')}><Text>Delete</Text></TouchableOpacity>
                                <TouchableOpacity onPress={console.log('update')}><Text>Post Update</Text></TouchableOpacity>
                            </View>
                        );
                    }}
                >
                </FlatList> 



            </KeyboardAvoidingView>

        );
    }
}

// Test //
// export class GoalsScreenView extends React.Component{
//     render(){
//         return(
//             <SafeAreaView style={styles.container}>
//                 <Header>
//                     {/* header title */}
//                     <Text style={styles.goalText}> Expand your life</Text>

//                     {/* add goal button goto stack */}
//                     <TouchableOpacity onPress={() => navigation.navigate("AddGoal")} >
//                         <Text style={styles.addBtn}> + </Text>
//                     </TouchableOpacity>
//                 </Header>

//             {/* list goes here */}
//             {/* <GoalsList/> */}


//             <FlatList
//                 data={this.state.listArray}
//                 renderItem={({ item, index }) => {
//                     return (
//                         <View>
//                             <Text style={{ fontSize: 30 }}>{item.fireListGoal} </Text>
//                             <Text style={{ fontSize: 20 }}>{item.fireListCat}</Text>
//                             <Text style={{ fontSize: 15 }}> {item.fireListWhy}</Text>
//                         </View>
//                     );
//                 }}
//             >
//             </FlatList>

//         </SafeAreaView>
//         )
//     }
// }

// First screen to show list //
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

            {/* Error here, need to get data from other screen */}
            {/* <FlatList
                data={this.state.listArray}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Text style={{ fontSize: 30 }}>{item.fireListGoal} </Text>
                            <Text style={{ fontSize: 20 }}>{item.fireListCat}</Text>
                            <Text style={{ fontSize: 15 }}> {item.fireListWhy}</Text>
                        </View>
                    );
                }}
            >
            </FlatList> */}

        </SafeAreaView>
    );
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
    }
})