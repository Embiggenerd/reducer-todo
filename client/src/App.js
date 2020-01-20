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

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED', payload: {} })
  }

  const handleDeleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: { id } })
  }

  console.log('AppState', state)
  return (
    <TodoContext.Provider value={{
      state,
      handleSubmitTodo,
      handleOnClickCompleted,
      handleDeleteTodo,
    }} >
      <div className="App">
        <header className="App-header">
          <TodoForm />
          <button onClick={handleClearCompleted}>Clear Completed</button>
          <TodoList />
        </header>
      </div>
    </TodoContext.Provider>

  );
}

export default App;
