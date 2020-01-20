export const deleteTodoReducer = (state, payload) => {
    let stateCopy = [...state]
    let index = -1

    for (let i = 0; i < stateCopy.length; i++) {
        if (stateCopy[i].id === payload.id) {
            index = i
            break
        }
    } if (index !== -1) {
        stateCopy.splice(index, 1) // Since splice is acting on a copy here, we are pure
        return stateCopy
    } else {
        console.log(`index not found for id ${payload.id} in state`, stateCopy)
    }
}
