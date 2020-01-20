import { findIndexById } from "../utils";

export const toggleCompletedReducer = (state, payload) => {
    const stateCopy = [...state]

    const index = findIndexById(payload.id, stateCopy)

    if (index !== -1) {
        stateCopy[index].completed = !stateCopy[index].completed
        return stateCopy
    }
}