import { LoginForm } from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/auth/selectors';
export default function Login() {
  const isLoggedIn =useSelector(selectIsLoggedIn);

  return (
    <div>
    { !isLoggedIn && <LoginForm />}
    </div>
  );
}
