import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';
import Constants from 'expo-constants';
import firebase from '../firebase'

import AddGoalList from '../screens/AddGoalScreen'

// export class GoalsList extends React.Component{

 
//   render(){
//     return(
//     <Text>{}</Text>
//     ); 
//   }
//  }



export default function GoalsList({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

  

      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <Item goal={item.goal} desc={item.desc} 
        />}    
        keyExtractor={item => item.id}
      /> */}
    </SafeAreaView>
  ); 
}

{/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  goals: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 20,
  },
}); */}