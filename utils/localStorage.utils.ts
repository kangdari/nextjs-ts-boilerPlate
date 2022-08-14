const getData = (key: string) => localStorage.getItem(key);

const setData = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getAuthToken = () => getData("TOKEN");

export const setAuthToken = (token: string) => setData("TOKEN", token);
