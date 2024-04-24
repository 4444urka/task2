import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { Controller, useForm, SubmitHandler, useFormState } from 'react-hook-form';

import { companyNameValidation, loginValidation, passwordValidation, phoneNumberValidation } from './validation';

type UserInfo = {
    login: string;
    companyName: string;
    phoneNumber: string;
    password: string;
}

export default function SignUp() : JSX.Element {

    const { handleSubmit, control } = useForm<UserInfo>();
    const onSubmit: SubmitHandler<UserInfo> = (data) => console.log(data);
    const { errors } = useFormState({control});
    
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} sx={{mt: 3}}>
                <Grid item xs={12}>
                    <Controller
                    rules={loginValidation}
                    control={control}
                    name='login'
                    render={({ field }) => (
                        <TextField
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            autoComplete="given-name"
                            name="Логин"
                            required
                            fullWidth
                            label="Логин"
                            autoFocus
                            helperText={errors.login?.message}
                            error={!!errors.login?.message}
                        />)} />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        rules={companyNameValidation}
                        control={control}
                        name='companyName'
                        render={({ field }) => (
                            <TextField
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                required
                                fullWidth
                                label="Название компании"
                                name="Название компании"
                                helperText={errors.companyName?.message}
                                error={!!errors.companyName?.message}
                            />)}/>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        rules={phoneNumberValidation}
                        control={control}
                        name='phoneNumber'
                        render={({ field }) => (
                            <TextField
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                required
                                fullWidth
                                label="Номер телефона"
                                name="Номер телефона"
                                type="tel"
                                helperText={errors.phoneNumber?.message}
                                error={!!errors.phoneNumber?.message}
                            />)}/>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        rules={passwordValidation}
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <TextField
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                required
                                fullWidth
                                name="Пароль"
                                label="Пароль"
                                type="password"
                                autoComplete="new-password"
                                helperText={errors.password?.message}
                                error={!!errors.password?.message}
                            />)}/>
                </Grid>
                </Grid>
                <Button
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
            </form>
            </Box>
            </Box>
        </Container>

      );
    }