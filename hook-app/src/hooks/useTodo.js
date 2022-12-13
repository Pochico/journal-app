import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (todo) => {
        dispatchTodo({
            type: 'Add Todo',
            payload: todo,
        });
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: 'Remove Todo',
            payload: id,
        });
    };

    const handleDone = (id) => {
        dispatchTodo({
            type: 'Done Todo',
            payload: id,
        });
    };

    const todosCount = () => {
        let todosCount = todos.length;
        return todosCount;
    };

    const pendingTodosCount = () => {
        let pending = todos.filter((todo) => todo.done === false).length;
        return pending;
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleDone,
        pendingTodosCount,
        todosCount,
    };
};
