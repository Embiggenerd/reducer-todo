export const findIndexById = (id, stateCopy) => {
    let index = -1

    for (let i = 0; i < stateCopy.length; i++) {
        if (stateCopy[i].id == id) {
            index = i
            break
        }
    }

    return index
}