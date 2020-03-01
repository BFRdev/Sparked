
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native'


// screens import 
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CategorySignin from './screens/CategorySignin';
import FeedScreen from './screens/FeedScreen';

// tab navigator 
import {AppTabs} from './AppTabs'

//navivation once logged in 
const LoginStack = createStackNavigator({
  Feed: AppTabs,
});

//auth navigation
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen, 

});

<NavigationContainer>

  
</NavigationContainer>

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
      navigationOptions: {
        header: null,
      },
      defaultNavigationOptions: {
        title: 'App'
      }
    }
  )
);







