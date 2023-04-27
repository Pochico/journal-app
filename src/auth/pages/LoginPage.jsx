import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Alert, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import { startLoginWithEmail, startGoogleSignIn } from '../../store/auth';
import { useMemo } from 'react';

const formData = {
    email: '',
    password: '',
};
const formValidations = {
    email: [(value) => value.includes('@'), 'Invalid email address'],
    password: [ (value) => value.length >= 6, 'Password must be at least 6 characters' ],
};

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const { formState, email, password, onInputChange } = useForm(formData, formValidations);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmail(formState));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__fast'>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña1234"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                variant="outlined"
                                fullWidth
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ ml: 2 }}>Google</Typography>
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                disabled={isAuthenticating}
                                fullWidth
                                type="submit"
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end">
                        <Link component={RouterLink} to="/auth/register">
                            Create Account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
