import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('ME REDIBUJÉ NOMAMES');

    return (
        <>
            <button onClick={() => increment(6)}>+</button>
        </>
    );
});
