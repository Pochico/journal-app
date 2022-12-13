import { useCounter } from '../hooks';

const CounterApp = () => {

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
