import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { t } from 'i18n-js';
import i18n from '../i18n'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GameScreen from '../GameScreen/GameScreen';
import Menu from '../Menu/Menu';
import FinishScreen from '../FinishScreen/FinishScreen';


const Stack = createStackNavigator();


function Navigation() {

    return(
        <NavigationContainer i18n={i18n}>
            <Stack.Navigator>
               <Stack.Screen name='Menu' component={Menu} options={{tilte: 'Menu'}}/> 
               <Stack.Screen name='GameScreen' component={GameScreen} options={{title:t('calculation')}} /> 
                <Stack.Screen name='FinishScreen' component={FinishScreen} options={{title:t('end'), headerLeft:null}} />
            </Stack.Navigator>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}

export default Navigation
