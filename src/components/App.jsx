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
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Register from 'Pages/register';
import Login from 'Pages/Login';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element ={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}
