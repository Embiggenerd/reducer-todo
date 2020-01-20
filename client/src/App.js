import React, { useReducer } from 'react';
import './App.css';

import { TodoList, TodoForm } from './components'
import { initialStateTodo, reducerTodo } from './reducers'
import { TodoContext } from './contexts'

function App() {
  const [state, dispatch] = useReducer(reducerTodo, initialStateTodo)

  const handleSubmitTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: { item: todo, id: Date.now(), completed: false } })
  }

  const handleOnClickCompleted = id => {
    console.log('handleOnClickCompleted', id)
    dispatch({ type: "TOGGLE_COMPLETED", payload: { id } })
  }

  console.log('AppState', state)
  return (
    <TodoContext.Provider value={{ state, handleSubmitTodo, handleOnClickCompleted }} >
      <div className="App">
        <header className="App-header">
          <TodoForm />
          <TodoList />
        </header>
      </div>
    </TodoContext.Provider>

  );
}

export default App;
