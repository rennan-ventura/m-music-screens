import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeCliente from '../pages/HomeCliente'
import HomeMusico from '../pages/HomeMusico'
import PedidoForms from '../pages/PedidoForms'
import ListaPedido from '../pages/ListaPedido'

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
    <AppStack.Navigator>
        <AppStack.Screen
            name='HomeCliente'
            component={HomeCliente}
            options={{headerShown: false}}
        />

        <AppStack.Screen
            name='HomeMusico'
            component={HomeMusico}
            options={{headerShown: false}}
        />

        <AppStack.Screen
            name='PedidoForms'
            component={PedidoForms}
            options={{headerShown: false}}
        />

        <AppStack.Screen
            name='ListaPedido'
            component={ListaPedido}
            options={{headerShown: false}}
        />
    </AppStack.Navigator>
}

export default AppRoutes;