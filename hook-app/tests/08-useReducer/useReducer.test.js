import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Test todoReducer', () => {
    const initialState = [
        {
            id: 1,
            description: 'demo todo',
            done: false,
        },
    ];

    test('should return initial state', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('should add one todo', () => {
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'new demo todo',
                done: false,
            },
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should remove todo', () => {
        const action = {
            type: 'Remove Todo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('should do toggle todo Done', () => {
        const action = {
            type: 'Done Todo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
});
