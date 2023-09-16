import { ContactsForm } from './ContactsForm/ContactsForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactsList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsOperation';



export function App() {


 const dispatch=useDispatch();

const addNewContact = (contact) => dispatch(addContact(contact));

  return (
    <Section title="Phonebook">
      <ContactsForm  onSubmit={addNewContact}
 />    
      <h2>Contacts </h2>
      <Filter />
      <ContactList /> 
    </Section>
  );
}













  // useEffect(() => {
  //   const localContacts = localStorage.getItem("localContacts");
  //   const parsedContact = JSON.parse(localContacts);
  //   console.log(parsedContact);
  //   if (parsedContact) {
  //     setContacts(parsedContact);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('localContacts', JSON.stringify(contacts));
  // }, [contacts]);


 
  // const getFilteredContact = () => {
  //   const normalizeFilter = filters.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  

  // const filteredContact = getFilteredContact();