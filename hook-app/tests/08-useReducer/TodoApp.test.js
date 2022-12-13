import { render } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

describe('Test TodoApp', () => {
    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo 1', done: false },
            { id: 2, description: 'Todo 2', done: true },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleOnDeleteTodo: jest.fn(),
        handleOnToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
    });

    test('should show component correctly', () => {
        render(<TodoApp />);

        expect(screen.getByText('Todo 1'));
        expect(screen.getByText('Todo 2'));
    });
});
