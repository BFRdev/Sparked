import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryList from './components/categoryList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Changed Text homies</Text> */}
      <CategoryList></CategoryList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
