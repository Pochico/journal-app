import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: 'primary.main',
                padding: 4,
            }}
        >
            <Grid item xs={12}>
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    );
};
