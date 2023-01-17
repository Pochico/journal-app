import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Icon, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña1234"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Button variant="outlined" fullWidth>
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
                            <Button variant="contained" fullWidth>
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
