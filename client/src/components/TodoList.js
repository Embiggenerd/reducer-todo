import React, { useContext } from 'react'

import { TodoContext } from '../contexts'
import { TodoItem } from './index'
export const TodoList = () => {
    const { state } = useContext(TodoContext)
    console.log('TodoListState', state)
    return (
        <div className="todo-list" data-testid="todo-list">
           {state.map( (todo)=><TodoItem {...todo} >TodoList</TodoItem>)}
        </div >
    )
}