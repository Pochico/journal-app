import { Link as RouterLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthLayout } from '../layout/AuthLayout';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmail } from '../../store/auth/thunks';

const formData = {
    displayName: '',
    email: '',
    password: '',
};

const formValidations = {
    displayName: [ (value) => value.length >= 3, 'Name must be at least 3 characters' ],
    email: [(value) => value.includes('@'), 'Invalid email address'],
    password: [ (value) => value.length >= 6, 'Password must be at least 6 characters' ],
};

export const RegisterPage = () => {
    // Hooks
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage } = useSelector( (state) => state.auth );
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    // Form Variables
    const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid, } = useForm(formData, formValidations);

    // Functions
    const onSubmit = async(event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        await dispatch(startCreatingUserWithEmail(formState));
    };

    return (
        <AuthLayout title="Create account">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__fast'>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder="John Doe"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="mail@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Password1234"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
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
                            xs={12}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                disabled={isCheckingAuthentication}
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end">
                        <Typography sx={{ mr: 1 }}>
                            Already have an account?
                        </Typography>
                        <Link component={RouterLink} to="/auth/login">
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
