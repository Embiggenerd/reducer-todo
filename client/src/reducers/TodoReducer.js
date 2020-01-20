export const initialStateTodo = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducerTodo = (state, {type, payload}) => {
    switch (type) {
        case "ADD_TODO":
            return [...state, payload]
        default:
            return state
    }
}