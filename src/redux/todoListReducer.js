import { ADD, DELETE, UPDATE } from './actions';

const initialState = [];

export default function todoListReducer(state = initialState, action) {
    switch (action.type) {

        case ADD:
            return [...state, action.payload]

        case DELETE:
            return state.filter(item => item.id !== action.payload.id)

        case UPDATE: {
            const mappedTodo = state.find(item => item.id !== action.payload.id)
            mappedTodo.name = action.payload.name;
            return [...state];
        }

        default:
            return state;
    }
}