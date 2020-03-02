import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// screens imports 
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CategorySignin from './screens/CategorySignin';
import FeedScreen from './screens/FeedScreen';

// tab navigator 
import {AppTabs}  from './AppTabs';

// create stack nav v5
// const Stack = createStackNavigator();

// new navigation, if logged in goto tab navigator else goto authentication
// export const Routes = ({ }) => {
//   return (
//     <NavigationContainer>
//       {email ? (<AppTabs/>) : (<Stack.Navigator initialRouteName="Loading"
//         screenOptions={{ header: () => null }}
//       >
//         <Stack.Screen name="Loading" component={LoadingScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Regierter" component={RegisterScreen} />

//       </Stack.Navigator>)}
//     </NavigationContainer>
//   );
// }


// old stack nav for auth, directs to single component once logged in v4
//navivation once logged in 
const LoginedStack = createStackNavigator({
  // fix here 
  Nav: AppTabs,
});

//auth navigation
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







