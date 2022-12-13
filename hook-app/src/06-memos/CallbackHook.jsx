import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

// Necesita memo() en el componente hijo que recibe la función para memorizarla, si no, se regenerará
export default function CallbackHook() {
    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback((incrementValue) => {
        setCounter((value) => value + incrementValue);
    }, []);

    return (
        <>
            <h2>El counter: {counter}</h2>
            <ShowIncrement increment={incrementFather} />
        </>
    );
}
