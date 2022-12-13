import React, { useEffect, useReducer } from 'react';
import TodoForm from './TodoForm';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
    const {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleDone,
        pendingTodosCount,
        todosCount,
    } = useTodo();

    return (
        <>
            <h2>
                Tasks to do: {pendingTodosCount()} / {todosCount()}
            </h2>
            <TodoList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onDone={handleDone}
            />
            <TodoForm onNewTodo={handleNewTodo} />
        </>
    );
};
