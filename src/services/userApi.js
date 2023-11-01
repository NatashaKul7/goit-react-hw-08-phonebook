import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    Authorization: 'Bearer ...',
  },
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');
  return data;
};

export const requestCurrentUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');
  return data;
};
