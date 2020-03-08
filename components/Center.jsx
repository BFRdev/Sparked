import React from 'react'
import { View } from 'react-native';

// center align container

export const Center = ({ children }) => {
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
