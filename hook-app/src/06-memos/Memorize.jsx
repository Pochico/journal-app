import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>
                <Small value={counter} />
            </h1>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => setShow(!show)}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    );
};
