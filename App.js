
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import CategorySignin from './screens/CategorySignin'
import FeedScreen from './screens/FeedScreen'

import * as firebase from 'firebase'

//firebacse key 
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
//firebase.analytics();

//navivation once logged in 
const LoginStack = createStackNavigator({
  Feed: FeedScreen,
})

//auth navigation
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen, 
  pickCategory : CategorySignin,
})

//create navigation 
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthStack,
      App: LoginStack,
     
    },
    {
      initialRouteName: "Loading",
      defaultNavigationOptions: {
        title: 'App'
      }
    }
  )
);







