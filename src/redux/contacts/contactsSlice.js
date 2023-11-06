import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  requestContacts,
  updateContacts,
} from './operations';

const INITIAL_STATE = {
  contacts: {
    item: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  editingContactId: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
    setEditingContactId(state, action) {
      state.editingContactId = action.payload;
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

      // Update contact

      .addCase(updateContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.item = state.contacts.item.map(contact => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        });

        // const updatedContactIndex = state.contacts.item.findIndex(contact => contact.id === action.payload.id)
        // if (updatedContactIndex !== -1) {
        //   state.contacts.item[updatedContactIndex] = action.payload
        // }
      })

      .addMatcher(
        isAnyOf(
          requestContacts.pending,
          addContacts.pending,
          deleteContacts.pending,
          updateContacts.pending
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
          deleteContacts.rejected,
          updateContacts.rejected
        ),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContact, setEditingContactId } = contactsSlice.actions;
