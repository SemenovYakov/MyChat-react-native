import {storeUserSession} from '../../../tokens/encrypto';

interface IData {
  email: string;
  password: string;
}

export const login = async (data: IData) => {
  const response = await fetch('http://localhost:4000/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJSON = await response.json();
  console.log(responseJSON.accessToken);

  await storeUserSession(responseJSON.accessToken);
};
