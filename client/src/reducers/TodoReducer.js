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
            const stateCopy = [...state] // Copy state to keep things pure
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

        default:
            return state
    }
}