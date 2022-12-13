import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

export default function TodoForm({ onNewTodo }) {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };
        onNewTodo(newTodo);

        onResetForm();
    };

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    className="task-input"
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Enter task..."
                    onChange={onInputChange}
                />
                <button>Add Task</button>
            </form>
        </>
    );
}
