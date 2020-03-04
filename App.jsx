import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// screens imports 
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CategorySignin from './screens/CategorySignin';
import FeedScreen from './screens/FeedScreen';

// tab navigator 
import { AppTabs } from './AppTabs';

// const Stack = createStackNavigator()

// export default class App extends React.Component {

//   render(){
  
//     return(
//       // trying to do...
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Loading"
//           navigationOptions={{header: () => null}}
//         >
//           <Stack.Screen
//             name="Loading"
//             component={LoadingScreen}
//           />
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//           />
//             <Stack.Screen
//             name="Register"
//             component={RegisterScreen}
//           />
//           <Stack.Screen
//             name="Sparked"
//             component={AppTabs}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
      
//     );
//   }; }
  

// old stack nav for auth, directs to single component (AppTabs) once logged in v4

//navivation once logged in 
const LoginedStack = createStackNavigator({
  // fix here 
  Sparked: AppTabs,
}, 
{
  navigationOptions: {
    header: null,
  },
}
);

// //auth navigation
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







