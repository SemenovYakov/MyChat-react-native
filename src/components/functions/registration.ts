import {storeUserSession} from '../../../tokens/encrypto';

interface IData {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
}

export const registration = async (data: IData) => {
  try {
    const response = await fetch(
      'http://192.168.1.139:4000/auth/registration',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseJSON = await response.json();

    await storeUserSession(responseJSON.accessToken, responseJSON.refreshToken);
  } catch (error) {
    console.log(error);
  }
};
