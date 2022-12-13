import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h2>Login</h2>

            <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

            <button
                aria-label="set-user"
                onClick={() => setUser({ id: 1, name: 'Julen', age: 27 })}
            >
                Log in
            </button>
        </>
    );
};
