const initialState = [
    {
        id: 1,
        todo: 'Programar',
        done: false,
    },
];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === 'addTodo') {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Ejerciciar',
    done: false,
};

const addTodo = {
    type: 'addTodo',
    payload: newTodo,
};

todos = todoReducer(todoReducer(), addTodo);

console.log({ state: todos });
