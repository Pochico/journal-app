import React from 'react';
import { useForm } from '../hooks/useForm';

const SimpleForm = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    // TODO: Verificaciones con mensajes de los inputs

    return (
        <>
            <h3>Formulaire</h3>

            <form action="" className='form'>
                <input type="text" name="username" id="username" value={username} placeholder="Username" onChange={onInputChange} />
                <input type="email" name="email" id="email" value={email} placeholder="username@123.com" onChange={onInputChange} />
                <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={onInputChange} />
            </form>
            <button onClick={onResetForm}>Reset Form</button>
        </>
    )
}

export default SimpleForm;