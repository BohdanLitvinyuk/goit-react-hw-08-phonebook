import React, { useState } from 'react';
import './ContactForm.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function ContactsForm({ onSubmit }) {
  const contacts = useSelector(state => state.phoneBook.contacts.items);

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const reset = () => {
    setContact({ number: '', name: '' });
  };

  const addContact = evt => {
    evt.preventDefault();

    const existContact = contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existContact) {
      alert(`${contact.name} is already exist`);
      reset();
    } else {
      const { name, number } = contact;
      const newContact = { name, number };
      onSubmit(newContact);
      reset();
    }
  };

  return (
    <form onSubmit={addContact} className="contact_form">
      <label className="contact_form_label">
        Name
        <TextField 
        fullWidth
        size="small"
        placeholder="enter a name"
          type="text"
          name="name"
          value={contact.name}
          pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className="contact_form_input"
          
        />
      </label>
      <label className="contact_form_label">
        Number
        <TextField
        fullWidth
        size="small"
        placeholder="enter a number"
          type="tel"
          name="number"
          value={contact.number}
          pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className="contact_form_input"
        />
      </label>
      <Button className='form__button' type="submit" variant="contained" size='small'> Add contact</Button>
    </form>
  );
}
