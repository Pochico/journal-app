import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onDeleteTodo, onDone }) => {
    return (
        <>
            <ul className="todo-list">
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={onDeleteTodo}
                            onDone={onDone}
                        />
                    );
                })}
            </ul>
        </>
    );
};
