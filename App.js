
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import CategorySignin from './screens/CategorySignin'
import FeedScreen from './screens/FeedScreen'

import firebase from './firebase'

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







