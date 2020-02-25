import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import Constants from 'expo-constants';


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

function Item({ id, title, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          { backgroundColor: selected ? '#EF9D53' : '#51BA65' },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
  export default function CategoryList() {
    const [selected, setSelected] = React.useState(new Map());
  
    const onSelect = React.useCallback(
      id => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));
  
        setSelected(newSelected);
      },
      [selected],
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          numColumns={2}
          keyExtractor={item => item.id}
          extraData={selected}
        />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#EF9D53',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
    },
  });






