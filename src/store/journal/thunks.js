import { FirebaseDB } from '../../firebase/config';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import {
    addEmptyNote,
    deleteNoteById,
    isSavingNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} from '.';
import { loadNotes } from '../../helpers';
import { fileUpload } from '../../helpers/fileUpload';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        dispatch(isSavingNote());

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch(addEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El ID del usuario no existe.');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const selectActiveNote = () => {
    return (dispatch) => {
        dispatch(setActiveNote());
    };
};

export const startSavingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const note = getState().journal.activeNote;
        const noteToFireStore = { ...note };

        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updateNote(note));
    };
};

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));
    };
};

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { activeNote: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
         dispatch(deleteNoteById(note.id));
    };
};
