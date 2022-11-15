import React from 'react';
import PropTypes from 'prop-types';

const FirstComponent = ({ nombre, id }) => {

    const saludo = `Hola, ${nombre}.`;

    return (
        <>
            <h1>{saludo}</h1>
            <p className='hello'>Tu ID es {id}</p>
        </>
    );

}

FirstComponent.propTypes = {
    nombre: PropTypes.string.isRequired,    // isRequired lo convierte en obligatorio
    id: PropTypes.number                    // Si no lo lleva será opcional
}

export default FirstComponent;