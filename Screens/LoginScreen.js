import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { COLOR } from '../contract/fontSize';

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
            {/**Header */}
            <View style={{ flex: 1 }}>
                <Text style = {{color : COLOR.black}}>
                    Login to your account.
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;

