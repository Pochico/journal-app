import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // activeNote: {
        //     id: '',
        //     title: '',
        //     body: '',
        //     date: 123,
        //     imageUrl: [],
        // }
    },
    reducers: {
        isSavingNote: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        addEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
            state.messageSaved = '';
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map((note) =>
                note.id === action.payload.id ? action.payload : note
            );
            state.messageSaved = 'Nota actualizada';
        },
        setPhotosToActiveNote: (state, action) => {
            state.activeNote.imageUrls = [
                ...state.activeNote.imageUrls,
                ...action.payload,
            ];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.activeNote = null;
        },
        deleteNoteById: (state, action) => {
            state.isSaving = false;
            state.messageSaved = 'Nota eliminada';
            state.notes = state.notes.filter(
                (note) => note.id !== action.payload
            );
            state.activeNote = null;
        },
    },
});

export const {
    isSavingNote,
    addEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById,
} = journalSlice.actions;
