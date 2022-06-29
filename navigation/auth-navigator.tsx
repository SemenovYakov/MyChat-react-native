import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegistrationScreen} from '../src/pages/registration-screen';
import {HomeScreen} from '../src/pages/home-screen';
import {AuthScreen} from '../src/pages/auth-screen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Главная"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen name="Регистрация" component={RegistrationScreen} />
      <Stack.Screen name="Авторизация" component={AuthScreen} />
    </Stack.Navigator>
  );
};
