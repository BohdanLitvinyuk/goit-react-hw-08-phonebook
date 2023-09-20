import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { Section } from '../components/Section/Section';
import { ContactList } from '../components/ContactsList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsOperation';
import { getContacts } from 'redux/Contacts/contactsSelectors';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addNewContact = contact => dispatch(addContact(contact));
  return (
    <Section title="Phonebook">
      <Filter />
      <ContactsForm onSubmit={addNewContact} />
      <h2>Contacts List </h2>
      {contacts.length === 0 ? (
        <div>The contatcs list is empty 🔎</div>
      ) : (
        <ContactList />
      )}
    </Section>
  );
};
export default Contacts;
