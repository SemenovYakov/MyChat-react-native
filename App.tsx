import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/root';

import SplashScreen from 'react-native-splash-screen';
import EncryptedStorage from 'react-native-encrypted-storage';
import {refreshToken} from './tokens/encrypto';
import {checkAuth} from './src/components/functions/check-auth';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = EncryptedStorage.getItem(refreshToken);
    if (token) {
      checkAuth(token, setIsLoggedIn);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn !== null) {
      SplashScreen.hide();
    }
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      <RootNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default App;
