import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
} from './Contacts/contactsOperation';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleFulfilledGet = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
  state.contacts.error = '';
};
const handleFulfilledAdd = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(action.payload);
  state.contacts.error = null;
};
const handleFulfilledDelete = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== action.payload.id
  );
  state.contacts.error = null;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filteredContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getContacts.fulfilled, handleFulfilledGet)

      .addCase(addContact.fulfilled, handleFulfilledAdd)

      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(getContacts.pending, addContact.pending, deleteContact.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const { filteredContact } = phoneBookSlice.actions;
export const phoneBook = phoneBookSlice.reducer;
