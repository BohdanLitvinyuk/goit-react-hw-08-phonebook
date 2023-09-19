
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Contacts } from '../Pages/contacts';
import { Layout } from './Layout';
import Register from 'Pages/register';
import Login from 'Pages/Login';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element ={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}
