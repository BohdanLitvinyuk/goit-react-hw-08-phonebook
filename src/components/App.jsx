// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { Section } from './Section/Section';
// import { ContactList } from './ContactsList/ContactList';
// import Filter from './Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/Contacts/contactsOperation';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Contacts } from '../Pages/contacts';
import { Layout } from './Layout';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisteForm/RegisterForm';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element ={<LoginForm/>}/>
        </Route>
      </Routes>
    </div>
  );
}
