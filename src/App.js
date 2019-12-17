import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      task: 'example task',
      completed: false
    }
  ])

  return (
    <div className="App">
      <input type="text" />
      <button>Add</button>
      <ul>
        {todos.map(todo => {
          return <li>{todo.task}</li>
        })}
      </ul>
      <pre>{JSON.stringify(todos)}</pre>
    </div>
  )
}

export default App
