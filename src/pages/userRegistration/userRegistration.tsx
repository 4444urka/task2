import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
import { Controller, useForm, SubmitHandler, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../http/api';

import { companyNameValidation, loginValidation, passwordValidation, phoneNumberValidation } from './validation';
import { TUserRegistrationInfo } from '../../types';
import { makeUserBoss } from './makeUserBoss';

export default function SignUp() {

    const { handleSubmit, control } = useForm<TUserRegistrationInfo>({
        defaultValues: {
            name: '',
            companyName: '',
            phoneNumber: '',
            password: '',
            isBoss: false
        }
    });
    const navigate = useNavigate();
        const onSubmit: SubmitHandler<TUserRegistrationInfo> = async (data) => {
            try {
                const response = await registerUser(data);

                if (response.data.success)
                    alert('Пользователь успешно зарегистрирован');
                    navigate('/SingIn');
                    makeUserBoss(data);
            } catch (error: any) {
                if (error.response.status === 500) {
                    alert('Такой пользователь уже существует');
                }
                else
                    alert('Ошибка сервера');
            }
    }

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
                    name='name'
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
                            helperText={errors.name?.message}
                            error={!!errors.name?.message}
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
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <NavLink to="/companyRegister">
                        <Link variant="body2">
                            Нет компании? Создайте
                        </Link>
                    </NavLink>
                </Grid>
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
                <Grid item xs={12}>
                <Controller
                    control={control}
                    name='isBoss'
                    render={({ field }) => (
                        <FormControlLabel
                        control={
                            <Checkbox
                            color="primary"
                            onChange={(e) => field.onChange(e)}
                            checked={field.value}
                            />
                        }
                        label="Я босс"
                        />
                    )}
                    />
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