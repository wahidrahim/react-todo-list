import React from 'react'

export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTask: '',
      todos: []
    }
  }

  setNewTask = e => {
    this.setState({
      newTask: e.target.value
    })
  }

  addTask = e => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          task: this.state.newTask,
          done: false
        }
      ]
    })

    e.preventDefault()
  }

  render() {
    return (
      <div id="app">
        <form onSubmit={this.addTask}>
          <input type="text" onChange={this.setNewTask} />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                <span>{todo.task}</span>
                <button>Done</button>
              </li>
            )
          })}
        </ul>

        {/* <h4>Completed</h4>
      <ul>
        {this.state.todos.map(todo => {
          return (
            <li>
              <span>{todo.task}</span>
              <button>Done</button>
            </li>
          )
        })}
      </ul> */}
      </div>
    )
  }
}

export default App
