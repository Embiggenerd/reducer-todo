import { addTodoReducer, deleteTodoReducer } from './index'

export const initialStateTodo = [

    {
        item: 'lalala',
        completed: false,
        id: 123
    }
]

export const reducerTodo = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            return [...state, payload]

        case "TOGGLE_COMPLETED":
            return addTodoReducer(state, payload)

        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed)

        case "DELETE_TODO":
           return deleteTodoReducer(state, payload)
           
        default:
            return state
    }
}


