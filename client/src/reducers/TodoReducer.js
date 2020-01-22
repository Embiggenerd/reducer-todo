import { deleteTodoReducer, toggleCompletedReducer} from './index'
import { findIndexById } from '../utils';

export const initialStateTodo = [

    {
        item: 'lalala',
        completed: false,
        id: 123,
        notes: ""
    }
]
/**
 * 
 * @param {*} state 
 * @param {*} param1 
 * 
 * The two ways to handle a pure are to either copy the whole state, change the copy, then 
 * assign changed copy to state, or copy individual parts of state,and update those parts.
 * Because of the simplicity of this app, I chose to copy the whole state;
 */
export const reducerTodo = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            return [...state, payload]

        case "TOGGLE_COMPLETED":
            return toggleCompletedReducer(state, payload)

        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed)

        case "DELETE_TODO":
            return deleteTodoReducer(state, payload)

        case "ADD_NOTE" :
            const stateCopy = [...state]
            
            const index = findIndexById(payload.id, stateCopy)

            stateCopy[index].notes = stateCopy[index].notes + payload.note
    

            return stateCopy

            
            

        default:
            return state
    }
}


