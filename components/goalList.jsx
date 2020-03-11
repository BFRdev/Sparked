import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    goal: 'Firebase',
    desc: 'make app',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    goal: 'Nick buys Mac',
    desc: 'for the better of humanity',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    goal: 'Mike gives head',
    desc: 'new experience',
  },
];

function Item({ goal, desc}) {
  return (
    <View style={styles.item}>
      <Text style={styles.goals}>{goal}</Text>
      <Text style={styles.desc}>{desc}</Text>

    </View>
  );
}

export default function GoalsList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item goal={item.goal} desc={item.desc} 
        />}    
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});