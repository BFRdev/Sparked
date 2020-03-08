import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Header component 
export const Header = ({ children }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            {children}
        </View>

    );
}
