import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';

export default function SignIn() {

  return (
        <Container component="main" maxWidth="xs" sx={{justifyContent: 'center', display: 'flex'}}>
            <Box className='blank'>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginY: '10px'
                }}
            >
            <Typography component="h1" variant="h5">
                Вход
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    autoComplete="given-name"
                    name="Логин"
                    required
                    fullWidth
                    id="Login"
                    label="Логин"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="Пароль"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    />
                </Grid>
                </Grid>
                <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Войти
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <NavLink to="/SingUp">
                        <Link variant="body2">
                            Ещё нет аккаунта? Зарегистрироваться
                        </Link>
                    </NavLink>
                </Grid>
                </Grid>
            </Box>
            </Box>
            </Box>
        </Container>

      );
}