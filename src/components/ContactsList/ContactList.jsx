import PropTypes from 'prop-types';
import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsOperation';
import { contactsOperation } from 'redux/Contacts';
import { useEffect,useState } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts.items);

  const filter = useSelector(state => state.phoneBook.filter);
  const [visibleContacts, setVisibleContacts] = useState([]);

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);
 
  useEffect(() => {
    const getFilteredContact= () => {
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


  // const getFilteredContact = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const filteredContact = getFilteredContact();

  return (
    <ol className="contact__list">
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <li key={id} id={id} className="contact__list__item">
            {name}:<span className="contact__list__number">{phone}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </button>
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
