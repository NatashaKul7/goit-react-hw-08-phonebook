import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestLogin, requestRegister } from 'services/userApi';

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
      console.log(response);

      return response;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
