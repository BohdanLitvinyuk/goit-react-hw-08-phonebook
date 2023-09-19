import { Routes, Route } from 'react-router-dom';
// import { Home } from '../Pages/Home';
// import { Contacts } from '../Pages/contacts';
import { Layout } from './Layout';
// import Register from 'Pages/register';
// import Login from 'Pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';


import { lazy } from 'react';
// const Home=lazy(()=>import('../Pages/Home'));
// const Contacts=lazy(()=>import('../Pages/contacts'));
// const Register=lazy(()=>import('../Pages/register'));
// const Login=lazy(()=>import('../Pages/Login'));

const Home = lazy(() => import('../Pages/Home'));
const Contacts = lazy(() => import('../Pages/contacts'));
const Register = lazy(() => import('../Pages/register'));
const Login = lazy(() => import('../Pages/Login'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
