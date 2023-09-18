
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactsList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/contactsOperation';



export const Contacts=()=>{
    
const dispatch=useDispatch();

const addNewContact = (contact) => dispatch(addContact(contact));
    return (
        <Section title="Phonebook">
       <ContactsForm  onSubmit={addNewContact}/>    
      <h2>Contacts </h2>
      <Filter />
      <ContactList /> 
    </Section> 
    )
}