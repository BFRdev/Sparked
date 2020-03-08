import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export * from './actions/GoalActions';

// screens imports 
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import {GoalsScreen} from './screens/GoalsScreen';
import {AddGoalScreen} from './screens/AddGoalScreen';


// tab navigator 
import  AppTabs  from './AppTabs';

//navivation once logged in 
const LoginedStack = createStackNavigator({
  // fix here 
  Sparked: AppTabs,
  Goal: GoalsScreen,
  AddGoal: AddGoalScreen,
}, 
{
  navigationOptions: {
    header: null,
  },
}
);

// // //auth navigation
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,

});

//create navigation 
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: AuthStack,
      App: LoginedStack,
      
    },
    {
      initialRouteName: "Loading",
      navigationOptions: {
        header: null,
      },
      defaultNavigationOptions: {
        title: 'App'
      }
    }
  )
);







