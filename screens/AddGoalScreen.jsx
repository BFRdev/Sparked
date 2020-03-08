import React from 'react'
import {Center} from '../components/Center'
import { Text, Button } from 'react-native';

// add goal component
export const AddGoalScreen = ({navigation}) => {
    return( 
        <Center>
            <Text>add goal Screen</Text>
            {/* Add goal and nav back to My Goal list */}
            <Button title="add goal" onPress={()=>navigation.navigate("GoalsScreen")}/> 
        </Center>
    );
}
