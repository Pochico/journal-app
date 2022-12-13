import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

const bigCounter = (iterationCount = 1000) => {
    for (let i = 0; i < iterationCount; i++) {
        console.log('Wowzers, big bongos');
    }

    return `${iterationCount} times.`;
};

export const MemoHook = () => {
    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);
    const memoValue = useMemo(() => bigCounter(counter), [counter]);

    return (
        <>
            <h1>
                <Small value={counter} />
            </h1>
            <h3>{memoValue}</h3>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => setShow(!show)}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    );
};
