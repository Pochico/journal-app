import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('HOLA');
    return <p>{value}</p>;
});
