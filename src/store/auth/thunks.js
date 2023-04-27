import {
    logInWithEmail,
    logoutFirebase,
    registerWithEmail,
    signInWithGoogle,
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal';
import { checkingCredentials, logout, login } from './authSlice';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

export const startCreatingUserWithEmail = ({
    displayName,
    email,
    password,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerWithEmail({
            email,
            password,
            displayName,
        });
        if (!result.ok)
            return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result));
    };
};

export const startLoginWithEmail = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await logInWithEmail({ email, password });
        if (!result.ok)
            return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(logout());
        dispatch(clearNotesLogout());
    };
};
