import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './auth-navigator';
import {MainNavigator} from './main';

const Stack = createNativeStackNavigator();

export const RootNavigator = ({isLoggedIn}) => {
  console.log(isLoggedIn);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
