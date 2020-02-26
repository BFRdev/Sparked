import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList, View } from 'react-native';

import Constants from 'expo-constants';

//reference https://reactnative.dev/docs/flatlist 

//data array 
const categories = [
    {
        id: '01',
        title: 'fitness',
    },
    {
        id: '02',
        title: 'mindfullness',
    },
    {
        id: '03',
        title: 'education',
    },
    {
        id: '04',
        title: 'addict free',
    },
    {
        id: '05',
        title: 'creativity',
    },
    {
        id: '06',
        title: 'relationships',
    },
    {
        id: '07',
        title: 'finance',
    },
    {
        id: '08',
        title: 'travel',
    },
];

//pass data into fuction 
function CatItem({ id, title, selected, onSelect }) {
    return (
        // each category is a button 
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          //if selected change background color 
          { backgroundColor: selected ? '#EF9D53' : '#51BA65' },
        ]}
      > 
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
//   create list allow selected and deselection 
  export default function CategoryList() {
    const [selected, setSelected] = React.useState(new Map());
    // loop through data using map 
    const onSelect = React.useCallback(
      id => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
  
        setSelected(newSelected);
      },
      [selected],
    );
  
    //display everything
    return (
      <SafeAreaView style={styles.container}> 
       {/*header*/}
      <View style={styles.header}>
      <Text style={styles.header}>Pick your Sparks</Text>
      </View>

        {/* categories in flatlist */}
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            //   call function and place array in flatlist
            <CatItem
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          //settings 
          numColumns={2}
          keyExtractor={item => item.id}
          extraData={selected}
        />
      </SafeAreaView>
    );
  }

//   styles sheet 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      padding: 20,  
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
    },
    header:{
        margin: 0,
        padding: 5, 
        fontSize: 35,
        textAlign: 'center',
        backgroundColor: '#1893A3',
        color: 'white', 

    },
  });






