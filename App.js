
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCN8ZmOhyI2upGCWpPzMZsqmEY_igIvrgc",
  authDomain: "sparked-bd638.firebaseapp.com",
  databaseURL: "https://sparked-bd638.firebaseio.com",
  projectId: "sparked-bd638",
  storageBucket: "sparked-bd638.appspot.com",
  messagingSenderId: "480536595337",
  appId: "1:480536595337:web:945f6e133d77bc19a66f58",
  measurementId: "G-YGGLN3DBXH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const Appstack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: Appstack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);





// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Changed Text homies</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryList from './components/categoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changed Text homies</Text>
      {/* categories list uncomment to view. needs to be places in stack nav with auth
      <CategoryList></CategoryList> */}
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

