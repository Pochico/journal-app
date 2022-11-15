import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputText, setInputText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onNewCategory(inputText.trim());
        setInputText('');
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={handleInputChange} value={inputText} placeholder='Type your category...' />
        </form>
    );
}
