import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

//import screens for tabs navigator
import { GoalsScreen } from './screens/GoalsScreen';
import FeedScreen from './screens/FeedScreen';
import { SearchScreen } from './screens/SearchScreen';
import { ProfileScreen } from './screens/ProfileScreen';


//declare tab-nav
const Tabs = createBottomTabNavigator()

export const AppTabs = ({ }) => {
    
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
                        } else if (route.name === 'Search') {
                            // return <FontAwesome name={"profile"} size={size} color={color} />;
                        } else if (route.name === 'Profile') {
                            // return <FontAwesome name={"profile"} size={size} color={color} />;
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                {/* screen routes */}
                <Tabs.Screen name='Goals' component={GoalsScreen} />
                <Tabs.Screen name='Feed' component={FeedScreen} />
                <Tabs.Screen name='Search' component={SearchScreen} />
                <Tabs.Screen name='Profile' component={ProfileScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}