// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { Section } from './Section/Section';
// import { ContactList } from './ContactsList/ContactList';
// import Filter from './Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/Contacts/contactsOperation';
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from './Home';
import { Contacts } from './contacts';

const StyledLink = styled(NavLink)`
  color: black;
  margin:20px;
  &.active {
    color: orange;
  }
`;

export function App() {


  return (
    <div>
    <nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/about">About</StyledLink>

      <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
  </div>

);
}













