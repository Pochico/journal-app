import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Test TodoItem', () => {
    const todo = {
        id: 1,
        description: 'Hacer ejercicio',
        done: false,
    };

    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should return the unfinished todo', () => {
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('task');

        const textElement = screen.getByLabelText('todo-text');
        expect(textElement.className).toBe('task-text');
    });

    test('should call onDone function', () => {
        render(
            <TodoItem
                todo={todo}
                onDone={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );
        const textElement = screen.getByLabelText('todo-text');
        fireEvent.click(textElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('should call the deleteTodo function', () => {
        render(
            <TodoItem
                todo={todo}
                onDone={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});
