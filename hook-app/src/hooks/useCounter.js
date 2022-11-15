import { useState } from "react";

export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const decrement = () => {
        console.log(counter);
        return counter > 1 ? setCounter(counter - 1) : null;
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};