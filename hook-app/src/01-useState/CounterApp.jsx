import { useState } from 'react'
import { useCounter } from '../hooks';

const CounterApp = () => {

    // const [state, setCounter] = useState({
    //     counter1: 10,
    //     counter2: 20,
    //     counter3: 30,
    // });

    // const {counter1, counter2, counter3} = state;

    // return (
    //     <>
    //         <h2>Counter 1: {counter1}</h2>
    //         <h2>Counter 2: {counter2}</h2>
    //         <h2>Counter 3: {counter3}</h2>

    //         <hr />

    //         <button onClick={
    //             () => setCounter({
    //                 ...state,
    //                 counter1: counter1 + 1
    //             })
    //         }>+ 1</button>
    //     </>
    // )


    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h2>Counter with Custom Hook: {counter}</h2>

            <hr />

            <button onClick={() => decrement(3)}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => increment(1)}>+1</button>
        </>
    )

}

export default CounterApp;
