import {clearStorage} from '../../../tokens/encrypto';

export const logout = async (refreshToken: any) => {
  try {
    await fetch('http://192.168.1.139:4000/auth/logout', {
      method: 'POST',
      body: JSON.stringify(refreshToken),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
  await clearStorage();
};
