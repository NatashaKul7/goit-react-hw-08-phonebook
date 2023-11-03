import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestCurrentUser,
  requestLogin,
  requestLogout,
  requestRegister,
  setToken,
} from 'services/userApi';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const authData = await requestRegister(formData);

      return authData;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);
      // console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setToken(token);
      const response = await requestCurrentUser();

      return response;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await requestLogout();

      return response;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
