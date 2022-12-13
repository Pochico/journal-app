import React, { useCallback, useState } from 'react';
import { Hijo } from './Hijo';

export const Padre = () => {
    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const callbackIncrementar = useCallback((num) => {
        setValor((valor) => num + valor);
    }, []);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {numeros.map((n) => (
                <Hijo key={n} numero={n} incrementar={callbackIncrementar} />
            ))}
            {/* <Hijo /> */}
        </div>
    );
};
