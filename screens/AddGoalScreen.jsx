import React from 'react';
import { Text, Button, TextInput, KeyboardAvoidingView, Picker, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import firebase from '../firebase';
import { Header } from '../components/inLine';
import { LinearGradient } from 'expo-linear-gradient';
// initallize firebase realtime db 
const rootRef = firebase.database().ref('GoalList');

const screenWidth = Dimensions.get('screen').width;


export class AddGoalList extends React.Component {

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
        rootRef.push({
            fireListGoal: this.state.goal,
            fireListCat: this.state.category,
            fireListWhy: this.state.why
        }).then(this.props.navigation.navigate('GoalsScreen'));
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.keyboard} behavior='padding'>
                <LinearGradient
                    colors={['#0D98BA', '#0D52BA']}
                    style={styles.container}>

                    <Header>
                        <Text style={styles.titleText}>Adding Your Goal</Text>
                    </Header>

                    {/* Goal title */}
                    <Text style={styles.subTitleText}>What is your goal</Text>

                    {/* enter goal input */}
                    <Header>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your goal"
                            keyboardType='default'
                            onChangeText={
                                (text) => {
                                    this.setState({ goal: text });
                                }
                            }
                            value={this.state.goal}
                        />
                    </Header>

                    {/* pick selected cetegory */}
                    <Text style={styles.subTitleText}>What category is your Goal?</Text>

                    <Header >
                        {/* pick a category */}
                        <View style={styles.pickerText}>
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
                        </View>
                    </Header>


                    {/* goal discription */}
                    <Text style={styles.subTitleText}>Describe Your Goal:</Text>

                    <Header>
                        <TextInput
                            style={styles.descriptonText}
                            multiline={true}
                            numberOfLines={10}
                            placeholder="My goal is about..."
                            keyboardType='default'
                            disableFullscreenUI
                            onChangeText={
                                (text) => {
                                    this.setState({ why: text });
                                }} 
                                onContentSizeChange={(event) => {
                                    this.setState({ height: event.nativeEvent.contentSize.height })
                                }}
                             style={[styles.descriptonText, { height: Math.max(70, this.state.height) }]}
                             value={this.state.why}
                        />
                    </Header>

                    {/* nav back to My Goal list */}
                    <Header>
                        <TouchableOpacity style={styles.addingButton} onPress={this.onGoal.bind(this)}>
                            <Header><Text style={{ fontSize: 20, color: "#FFF" }}>Add</Text></Header>
                        </TouchableOpacity>
                    </Header>

                </LinearGradient>
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
    // container styles
    container: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white'
    },
    keyboard: {
        flex: 1
    },
    text: {
        color: 'white'
    },
    titleText: {
        color: 'white',
        fontSize: 28,
        paddingBottom: 35
    },
    subTitleText: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 12.5
    },
    inputText: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#EF9D53',
        borderWidth: 3,
        marginBottom: 10,
        marginTop: 2.5,
        padding: 10,
        height: 50,
        width: screenWidth / 1.2,
        fontSize: 15,
        color: 'black',
    },
    pickerText: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#EF9D53',
        borderWidth: 3,
        marginTop: 2.5,
        marginBottom: 10,
        paddingBottom: 20,
        height: 200,
        width: screenWidth / 1.2,
        fontSize: 15,
        color: 'black',
    },
    descriptonText: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderColor: '#EF9D53',
        borderWidth: 3,
        marginBottom: 10,
        marginTop: 2.5,
        padding: 20,
        width: screenWidth / 1.2,
        height: 50,
        fontSize: 15,
        color: 'black',
    },
    addingButton: {
        width: 200,
        height: 50,
        marginTop: 50,
        backgroundColor: "#EF9D53",
        borderRadius: 25,
    }

})