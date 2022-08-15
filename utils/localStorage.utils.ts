export const getLocalStorageData = (key: string) => localStorage.getItem(key);

export const setLocalStorageData = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getAuthToken = () => getLocalStorageData("TOKEN");

export const setAuthToken = (token: string) =>
  setLocalStorageData("TOKEN", token);
