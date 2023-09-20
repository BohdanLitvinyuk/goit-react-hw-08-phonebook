import PropTypes from 'prop-types';
import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperation';
import { contactsOperation } from 'redux/Contacts';
import { useEffect, useState } from 'react';
import * as React from 'react';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts.items);

  const filter = useSelector(state => state.phoneBook.filter);
  const [visibleContacts, setVisibleContacts] = useState([]);

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);

  useEffect(() => {
    const getFilteredContact = () => {
      const normalizeFilter = filter.toLowerCase();

      if (contacts.length > 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter)
        );
      }
      return contacts;
    };
    setVisibleContacts(getFilteredContact());
  }, [contacts, filter]);

  return (
    <ol className="contact__list">
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} id={id} className="contact__list__item">
            <div className='contact__list__card'>
              <h4 className='contact__list__name'>{name}</h4> <span className="contact__list__number">{number}</span>
            </div>
            <IconButton
            className='delete__button'
              aria-label="delete"
              size="small"
              type="button"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        );
      })}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
