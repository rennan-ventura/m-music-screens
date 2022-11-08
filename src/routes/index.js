import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn-Up/SignIn'
import WhoYA from '../pages/WhoYA'
import SignUpCliente from '../pages/SignIn-Up/SignUpCliente'
import SignUpMusico from '../pages/SignIn-Up/SignUpMusico'
import SignUpRestaurante from '../pages/SignIn-Up/SignUpRestaurante'
import HomeCliente from '../pages/HomeCliente'
import HomeMusico from '../pages/HomeMusico'
import HomeEstabelecimento from '../pages/HomeEstabelecimento'
import { ScreenStackHeaderLeftView } from 'react-native-screens'


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

            <Stack.Screen
            name='HomeCliente'
            component={HomeCliente}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='HomeMusico'
            component={HomeMusico}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='HomeEstabelecimento'
            component={HomeEstabelecimento}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}