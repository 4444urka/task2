import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';

export default function SignUp() {
    
    const [login, setLogin] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');

    function tryToSubmitUserData() {
        const phoneNumberRegex : RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        
        }
    

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
                Регистрация
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    autoComplete="given-name"
                    name="Логин"
                    required
                    fullWidth
                    id="Login"
                    label="Логин"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    fullWidth
                    id="CompanyName"
                    label="Название компании"
                    name="Название компании"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    fullWidth
                    label="Номер телефона"
                    name="Номер телефона"
                    id="PhoneNumber"
                    type="tel"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                onClick={tryToSubmitUserData}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Зарегистрироваться
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <NavLink to="/SingIn">
                        <Link variant="body2">
                            Уже есть аккаунт? Войти
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