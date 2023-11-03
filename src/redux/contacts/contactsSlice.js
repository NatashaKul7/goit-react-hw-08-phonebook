import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, requestContacts } from './operations';

const INITIAL_STATE = {
  contacts: {
    item: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.item = action.payload;
      })

      // Add contacts

      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.item.unshift(action.payload);
      })

      // Delete contacts

      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts.item = state.contacts.item.filter(
          contact => contact.id !== action.payload.id
        );
        state.contacts.isLoading = false;
        state.contacts.error = null;
      })

      .addMatcher(
        isAnyOf(
          requestContacts.pending,
          addContacts.pending,
          deleteContacts.pending
        ),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          requestContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected
        ),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;
