import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './user/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: authReducer,
  },
});
