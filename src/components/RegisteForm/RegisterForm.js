import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export const RegisterForm = () => {
 
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
      
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              type="text"
              required
              fullWidth
              label="UserName"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              type="email"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              type="password"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};




/////////////////////////////////////
// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form  onSubmit={handleSubmit} autoComplete="off">
//       <label >
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label >
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label >
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };