import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '../src/pages/profile';
import {ChatScreen} from '../src/pages/chat';

const Tab = createBottomTabNavigator();
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Профиль" component={ProfileScreen} />
      <Tab.Screen name="Чат" component={ChatScreen} />
    </Tab.Navigator>
  );
};
