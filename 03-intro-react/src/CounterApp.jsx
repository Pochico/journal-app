import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h3>CounterApp</h3>
            <p className='counter'>{counter}</p>

            <button onClick={() => handleAdd()}>+ 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>- 1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;