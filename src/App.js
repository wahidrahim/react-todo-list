import React, { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'example task',
      completed: false
    }
  ])

  return (
    <div className="App">
      <input type="text" onChange={e => setNewTodo(e.target.value)} />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              id: todos.length + 1,
              task: newTodo,
              completed: false
            }
          ])
        }}
      >
        Add
      </button>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.task}</li>
        })}
      </ul>
      <pre>{newTodo}</pre>
    </div>
  )
}

export default App
