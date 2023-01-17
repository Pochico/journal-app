import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Create account">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Full Name"
                            type="text"
                            placeholder="John Doe"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Mail"
                            type="email"
                            placeholder="mail@google.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Password1234"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Button variant="contained" fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end">
                        <Typography sx={{ mr: 2 }}>
                            Already have an account?
                        </Typography>
                        <Link component={RouterLink} to="/auth/register">
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
