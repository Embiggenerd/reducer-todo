import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoList } from './components'
import { initialStateTodo, reducerTodo } from './reducers'
import { TodoContext } from './contexts'

function App() {
  const [state, dispatch] = useReducer(reducerTodo, initialStateTodo)
  console.log('AppState', state)
  return (
    <TodoContext.Provider value={{state}} >
      <div className="App">
        <header className="App-header">
          <TodoList />
        </header>
      </div>
    </TodoContext.Provider>

  );
}

export default App;
