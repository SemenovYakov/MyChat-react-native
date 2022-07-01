import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {SubmitButton} from './registration-screen';
import {logout} from '../components/functions/logout';
import EncryptedStorage from 'react-native-encrypted-storage';
import {refreshToken} from '../../tokens/encrypto';
export const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <SubmitButton
        onPress={() => logout(EncryptedStorage.getItem(refreshToken))}
      />
    </SafeAreaView>
  );
};
