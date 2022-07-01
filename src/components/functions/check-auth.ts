import {SetStateAction} from 'react';
import {storeUserSession} from '../../../tokens/encrypto';

export const checkAuth = async (
  refreshToken: any,
  setIsLoggedIn: {
    (value: SetStateAction<boolean | null>): void;
    (arg0: boolean): any;
  },
) => {
  try {
    const response = await fetch('http://192.168.1.139:4000/auth/refresh', {
      method: 'POST',
      body: JSON.stringify(refreshToken),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseJSON = await response.json();
    console.log('checkAuth ' + responseJSON);
    setIsLoggedIn(true);
    await storeUserSession(responseJSON.accessToken, responseJSON.refreshToken);
    console.log(responseJSON);
  } catch (error) {
    console.log(error);
  }
};
