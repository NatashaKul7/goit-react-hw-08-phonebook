import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations';

const INITIAL_STATE = {
  token: null,
  user: {
    name: null,
    email: null,
  },
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

// function isRejectedAction(action) {
//   return action.type.endsWith('rejected');
// }
// function isPendingAction(action) {
//   return action.type.endsWith('pending');
// }

const authSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })

      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
