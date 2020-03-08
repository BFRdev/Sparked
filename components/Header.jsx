import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Header component 
export const Header = ({ children }) => {
    return (
        <View
            style={{
                flex: 0,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'row', 
                flexWrap:'wrap', 
                paddingTop: 10,   
                fontSize: 25,             
            }}>
            {children}
        </View>

    );
}