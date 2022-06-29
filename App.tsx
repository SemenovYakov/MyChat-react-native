import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/root';
import {retrieveUserSession} from './tokens/encrypto';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const checkAuth = async () => {
    const token = await retrieveUserSession();

    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    console.log(token);

    // if (token) {
    //   const valid = await verifyTokenAsync({token});

    //   setIsLoggedIn(!!valid);
    // }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default App;
