import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsAPI from './contactsApi';


export const getContacts = createAsyncThunk(
  'contacts/getContacts',()=> contactsAPI.getContacts()
);

export const addContact = createAsyncThunk('contacts/addContact', (data) =>
  contactsAPI.addContact(data)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', ({id}) =>
   { contactsAPI.deleteContact(id)
    return {id}   }
);
