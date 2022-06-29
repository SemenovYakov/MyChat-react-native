import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {SubmitButton} from './registration-screen';
import {logout} from '../components/functions/logout';
export const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <SubmitButton onPress={logout} />
    </SafeAreaView>
  );
};
