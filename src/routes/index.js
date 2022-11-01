import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import WhoYA from '../pages/WhoYA'
import SignUpCliente from '../pages/SignUpCliente'
import SignUpMusico from '../pages/SignUpMusico'
import SignUpRestaurante from '../pages/SignUpRestaurante'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='WhoYA'
            component={WhoYA}
            options={{headerShown: false}} 
            />

            <Stack.Screen
            name='SignUpCliente'
            component={SignUpCliente}
            options={{headerShown: false}} 
            />

            <Stack.Screen
            name='SignUpMusico'
            component={SignUpMusico}
            options={{headerShown: false}} 
            />

            <Stack.Screen
            name='SignUpRestaurante'
            component={SignUpRestaurante}
            options={{headerShown: false}} 
            />
        </Stack.Navigator>
    );
}