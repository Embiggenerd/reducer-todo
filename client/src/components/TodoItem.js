import React, { useContext } from 'react'
import { TodoContext } from '../contexts'

export const TodoItem = ({ item, id, completed }) => {
    const { handleOnClickCompleted, handleDeleteTodo } = useContext(TodoContext)


    return (
        <div className="todo-item" data-testid="todo-item">
            <h3 className={!completed ? "" : "complete"}>{item}</h3>
            <button onClick={() => handleOnClickCompleted(id)}
                className="complete-btn"
                data-testid="complete-btn"
            >
                {!completed ? "done" : "undo"}
            </button>
            <button onClick={()=>handleDeleteTodo(id)}>Delete</button>
        </div>
    )
}