import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {
    const dispatch = useDispatch();

    const { isSaving, activeNote } = useSelector((state) => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    };

    return (
        <JournalLayout>
            {!!activeNote ? (
                <NoteView className="animate__animated animate__fadeIn" />
            ) : (
                <NothingSelectedView className="animate__animated animate__fadeIn" />
            )}

            <IconButton
                onClick={onClickNewNote}
                disabled={isSaving}
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main', opacity: 0.6,
                    ':hover': { backgroundColor: 'error.main', opacity: 1 },
                    position: 'fixed',
                    right: 25,
                    bottom: 25,
                    boxShadow: '2px 4px 6px rgba(0, 0, 0, .6)',
                    transition: '.3s'
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
