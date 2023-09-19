import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,lazy  } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


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
        <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo='/login' />} />
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo='/contacts'/>} />
        <Route path="/login" element={ <RestrictedRoute component={Login} redirectTo='/contacts'/>} />
      </Route>
    </Routes>
  );
}
