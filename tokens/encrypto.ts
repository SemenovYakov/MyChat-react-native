import EncryptedStorage from 'react-native-encrypted-storage';

export const userSession = 'user_session';

export async function storeUserSession(token: string) {
  try {
    await EncryptedStorage.setItem(userSession, token);
  } catch (error) {}
}

export async function retrieveUserSession() {
  try {
    const session = await EncryptedStorage.getItem(userSession);

    return session;
  } catch (error) {}
}

export async function removeUserSession() {
  try {
    await EncryptedStorage.removeItem(userSession);
  } catch (error) {}
}

export async function clearStorage() {
  try {
    await EncryptedStorage.clear();
  } catch (error) {}
}
