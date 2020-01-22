import React, { useContext, useState } from 'react'

import { NoteForm } from './index'
import { TodoContext } from '../contexts'

export const TodoItem = ({ item, id, completed, notes }) => {
    const { handleOnClickCompleted, handleDeleteTodo, handleAddNote } = useContext(TodoContext)
    const [showNote, setShowNote] = useState(false)

    const handleOnClickTodo = () => {
        setShowNote(!showNote)
    }

    return (
        <div className="todo-item" data-testid="todo-item">
            <h3 onClick={handleOnClickTodo} className={!completed ? "" : "complete"}>{item}</h3>
            {showNote ? <NoteForm id={id} notes={notes} /> : null}

            <button onClick={() => handleOnClickCompleted(id)}
                className="complete-btn"
                data-testid="complete-btn"
            >
                {!completed ? "done" : "undo"}
            </button>

            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
        </div>
    )
}