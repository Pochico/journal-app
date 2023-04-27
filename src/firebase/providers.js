import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        };
    }
};

export const registerWithEmail = async ({ displayName, email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            displayName,
            email,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return { ok: false, errorCode: errorCode, errorMessage: errorMessage };
    }
};

export const logInWithEmail = async({email, password}) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, displayName, photoURL } = resp.user;

        return {
            ok: true,
            uid,
            displayName,
            photoURL
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {ok: false, errorCode, errorMessage};
    }
};

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}