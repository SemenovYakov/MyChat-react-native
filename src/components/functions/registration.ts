import {storeUserSession} from '../../../tokens/encrypto';

interface IData {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
}

export const registration = async (data: IData) => {
  const response = await fetch('http://localhost:4000/auth/registration', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJSON = await response.json();
  console.log(responseJSON);

  await storeUserSession(responseJSON.token);
};
