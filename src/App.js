import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  const ref = useRef()
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'example task',
      completed: false
    }
  ])

  const addTodo = e => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: newTodo,
        completed: false
      }
    ])

    ref.current.value = ''
    e.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={e => setNewTodo(e.target.value)}
          ref={ref}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.task}</li>
        })}
      </ul>
    </div>
  )
}

export default App
