import { findIndexById } from "../utils";

export const deleteTodoReducer = (state, payload) => {
    let stateCopy = [...state]
    const index = findIndexById(payload.id, stateCopy)
    
    if (index !== -1) {
        stateCopy.splice(index, 1) // Since splice is acting on a copy here, we are pure
        return stateCopy
    } else {
        console.log(`index not found for id ${payload.id} in state`, stateCopy)
    }
}
