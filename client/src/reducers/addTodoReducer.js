export const addTodoReducer = (state, payload) => {
    let stateCopy = [...state] // Copy state to keep things pure
    let index = -1

    for (let i = 0; i < stateCopy.length; i++) {
        if (stateCopy[i].id == payload.id) {
            index = i
            break
        }
    }

    if (index !== -1) {
        stateCopy[index].completed = !stateCopy[index].completed
        return stateCopy
    } else {
        console.log(`index not found for id ${payload.id} in state`, stateCopy)
    }
}

