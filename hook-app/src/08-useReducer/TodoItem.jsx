import React, { useReducer } from 'react';
// import { todoReducer } from './todoReducer';

export const TodoItem = ({ todo, onDeleteTodo, onDone }) => {
    return (
        <>
            <li className="task">
                <div className={`dash ${todo.done ? 'true' : 'false'}`}></div>
                <h4
                    aria-label="todo-text"
                    className="task-text"
                    onClick={() => onDone(todo.id)}
                >
                    {todo.description}
                </h4>
                <button
                    className="delete-btn"
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    Delete
                </button>
            </li>
        </>
    );
};
