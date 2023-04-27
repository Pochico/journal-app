import { useEffect, useMemo, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    DeleteForeverOutlined,
    SaveOutlined,
    UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components/';
import {
    isSavingNote,
    setActiveNote,
    startDeletingNote,
    startSavingNote,
    startUploadingFiles,
} from '../../store/journal';

export const NoteView = () => {
    const { activeNote: note, messageSaved } = useSelector(
        (state) => state.journal
    );
    const { title, body, date, onInputChange, formState } = useForm(note);
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire(messageSaved);
        }
    }, [messageSaved]);

    const fileInputRef = useRef();

    const onSaveNote = () => {
        dispatch(startSavingNote());
    };

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    };

    const onDeleteNote = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeletingNote());
            } else {
                return;
            }
        });
    };

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
                    {dateString}
                </Typography>
            </Grid>

            <input
                type="file"
                multiple
                onChange={onFileInputChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />

            <Grid item display={'flex'}>
                <IconButton
                    color="primary"
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>

                <Grid item>
                    <IconButton onClick={onDeleteNote} color="secondary">
                        <DeleteForeverOutlined />
                    </IconButton>
                </Grid>

                <Grid item>
                    <Button
                        onClick={onSaveNote}
                        color="primary"
                        sx={{ padding: 2 }}
                    >
                        <SaveOutlined sx={{ fontSize: 20, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>
            </Grid>

            <Grid container>
                <TextField
                    onChange={onInputChange}
                    type="text"
                    variant="filled"
                    value={title}
                    name="title"
                    fullWidth
                    placeholder="Write a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    onChange={onInputChange}
                    type="text"
                    variant="filled"
                    value={body}
                    name="body"
                    fullWidth
                    multiline
                    minRows={3}
                    placeholder="Write a note"
                    label="Note Body"
                    sx={{ border: 'none', mb: 1 }}
                />
            </Grid>

            <ImageGallery images={note.imageUrls} />
        </Grid>
    );
};
