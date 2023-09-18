
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { Section } from '../components/Section/Section';
import { ContactList } from '../components/ContactsList/ContactList';
import Filter from '../components/Filter/Filter';
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