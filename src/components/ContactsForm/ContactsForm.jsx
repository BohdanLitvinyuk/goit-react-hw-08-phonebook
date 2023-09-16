import React, { useState } from 'react';
import './ContactForm.css';
import { useSelector } from 'react-redux';

export function ContactsForm({ onSubmit }) {
  const contacts = useSelector(state => state.phoneBook.contacts.items);

  const [contact, setContact] = useState({
    name: '',
    phone: '',
  });

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const reset = () => {
    setContact({ phone: '', name: '' });
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
      const { name, phone } = contact;
      const newContact = { name, phone };
      onSubmit(newContact);
      reset();
    }
  };

  return (
    <form onSubmit={addContact} className="contact_form">
      <label className="contact_form_label">
        Name
        <input
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
        <input
          type="tel"
          name="phone"
          value={contact.phone}
          pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className="contact_form_input"
        />
      </label>
      <button type="submit"> Add contact</button>
    </form>
  );
}
