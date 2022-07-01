import EncryptedStorage from 'react-native-encrypted-storage';

export const accessToken = 'access';
export const refreshToken = 'refresh';

export async function storeUserSession(access: string, refresh: string) {
  try {
    await EncryptedStorage.setItem(accessToken, access);
    await EncryptedStorage.setItem(refreshToken, refresh);
  } catch (error) {}
}

export async function clearStorage() {
  try {
    await EncryptedStorage.clear();
  } catch (error) {
    console.log(error);
  }
}
