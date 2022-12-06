import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn-Up/SignIn'
import WhoYA from '../pages/WhoYA'
import SignUpCliente from '../pages/SignIn-Up/SignUpCliente'
import SignUpMusico from '../pages/SignIn-Up/SignUpMusico'


const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    <AuthStack.Navigator>
        <AuthStack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown: false}}
        />

        <AuthStack.Screen
            name='SignIn'
            component={SignIn}
            options={{headerShown: false}}
        />

        <AuthStack.Screen
            name='WhoYA'
            component={WhoYA}
            options={{headerShown: false}} 
        />

        <AuthStack.Screen
            name='SignUpCliente'
            component={SignUpCliente}
            options={{headerShown: false}} 
        />

        <AuthStack.Screen
            name='SignUpMusico'
            component={SignUpMusico}
            options={{headerShown: false}} 
        />
    </AuthStack.Navigator>
}

export default AuthRoutes;