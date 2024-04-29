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

import { registerCompany } from '../../http/api';

import { companyNameValidation, countryNameValidation } from './validation';
import { TCompanyInfo } from '../../types';

export default function CompanyRegistration() : JSX.Element {

    const { handleSubmit, control } = useForm<TCompanyInfo>();
    const onSubmit: SubmitHandler<TCompanyInfo> = (data) => registerCompany(data);
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
                    rules={companyNameValidation}
                    control={control}
                    name='companyName'
                    render={({ field }) => (
                        <TextField
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            autoComplete="given-name"
                            name="Название компании"
                            required
                            fullWidth
                            label="Название компании"
                            autoFocus
                            helperText={errors.companyName?.message}
                            error={!!errors.companyName?.message}
                        />)} />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        rules={countryNameValidation}
                        control={control}
                        name='country'
                        render={({ field }) => (
                            <TextField
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                required
                                fullWidth
                                label="Страна"
                                name="Страна"
                                helperText={errors.country?.message}
                                error={!!errors.country?.message}
                            />)}/>
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Зарегистрировать компанию
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <NavLink to="/SingUp">
                        <Link variant="body2">
                            Теперь вы можете зарегистрироваться как пользователь
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