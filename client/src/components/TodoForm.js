import React, { useState, useEffect, useContext } from 'react'
import { TodoContext } from '../contexts'

export const TodoForm = () => {

    const [todo, setTodo] = useState("")

    const { handleSubmitTodo } = useContext(TodoContext)

    const handleOnChange = (event) => {
        setTodo(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        handleSubmitTodo(todo)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input onChange={handleOnChange} value={todo} placeholder="todo" />
        </form>
    )
}