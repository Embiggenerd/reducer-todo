import React, { useContext } from 'react'

import { TodoContext } from '../contexts'

export const TodoList = () => {
    const { state } = useContext(TodoContext)
    console.log('TodoListState', state)
    return (
        <div className="todo-list" data-testid="todo-list">
            <h3>TodoList</h3>
        </div >
    )
}