import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

//import screens for tabs navigator
import { GoalsScreen } from './screens/GoalsScreen';
import { FeedScreen } from './screens/FeedScreen';
import { SearchScreen } from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import { LaunchScreen } from './screens/LaunchScreen';

//const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

export default class AppTabs extends React.Component {
    // remove stack header
    static navigationOptions = {
        headerShown: false,
    };
    render() {
        return (

            <NavigationContainer>
                <Tabs.Navigator
                    // configerations 
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;

                            if (route.name === 'Goals') {
                                return <MaterialIcons name={"playlist-add-check"} size={size} color={color} />;
                            } else if (route.name === 'Feed') {
                                return <FontAwesome name={"feed"} size={size} color={color} />;
                            } else if (route.name === 'Launch') {
                                return <FontAwesome name={"rocket"} size={size} color={color} />;
                            }
                            else if (route.name === 'Search') {
                                return <FontAwesome name={"search"} size={size} color={color} />;
                            } else if (route.name === 'Profile') {
                                return <Ionicons name={"md-person"} size={size} color={color} />;
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#EF9D53',
                        inactiveTintColor: '#0D52BA',
                    }}
                >
                    {/* screen routes */}
                    <Tabs.Screen name='Goals' component={GoalsScreen} />
                    <Tabs.Screen name='Feed' component={FeedScreen} />
                    <Tabs.Screen name='Launch' component={LaunchScreen} />
                    <Tabs.Screen name='Search' component={SearchScreen} />
                    <Tabs.Screen name='Profile' component={ProfileScreen} />
                </Tabs.Navigator>
            </NavigationContainer>


        );
    }

}

//declare tab-nav
