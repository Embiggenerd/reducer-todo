export const initialStateTodo = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducerTodo = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO":
            return [...state, payload]
        case "TOGGLE_COMPLETED":
            const stateCopy = [...state] // Copy state to keep things pure
            let index;
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i].id === payload.id) {
                    index = i
                }
            }
            console.log('ToggleReducer', index, payload.id)
            if (index) {
                stateCopy[index].completed = !stateCopy[index].completed
                return stateCopy
            }
        default:
            return state
    }
}