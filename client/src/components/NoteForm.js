import React, { useState, useContext } from 'react'

import { TodoContext } from '../contexts'
export const NoteForm = ({ notes, id }) => {

    const { handleAddNote } = useContext(TodoContext)

    const [note, setNote] = useState("")

    const handleOnChange = (event) => {
        setNote(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        setNote("")
        handleAddNote(id, note)
    }

    return (
        <div>
            <pre>{notes}</pre>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleOnChange} value={note} placeholder="Add a note" />
            </form>
        </div>
    )
}