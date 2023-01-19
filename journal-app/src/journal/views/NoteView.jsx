import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components/';

export const NoteView = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
            width="calc(100vw - 330px)"
        >
            <Grid item>
                <Typography fontSize={24} fontWeight="light">
                    17 de Enero, 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 20, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Write a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={3}
                    placeholder="Write a note"
                    label="Note Body"
                    sx={{ border: 'none', mb: 1 }}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    );
};
