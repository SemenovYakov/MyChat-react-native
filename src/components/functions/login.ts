import {storeUserSession} from '../../../tokens/encrypto';

interface IData {
  email: string;
  password: string;
}

export const login = async (data: IData) => {
  try {
    const response = await fetch('http://192.168.1.139:4000/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseJSON = await response.json();

    await storeUserSession(responseJSON.accessToken, responseJSON.refreshToken);
  } catch (error) {
    console.log(error);
  }
};
