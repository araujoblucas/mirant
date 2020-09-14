
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,  } from '@react-navigation/stack'


const AppStack = createStackNavigator();

import Home from './pages/Home';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Dashboard from './pages/Dashboard';
import Denounce from './pages/Denounce';
import Login from './pages/Login';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions= {{ headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Register2" component={Register2} />
                <AppStack.Screen name="Register3" component={Register3} />
                <AppStack.Screen name="Dashboard" component={Dashboard} />
                <AppStack.Screen name="Denounce" component={Denounce} />
                <AppStack.Screen name="Login" component={Login} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}