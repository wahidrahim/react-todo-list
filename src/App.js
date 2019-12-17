import React from 'react'

export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTask: '',
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }

    this.taskInput = React.createRef()
  }

  addTask = async e => {
    e.preventDefault()

    await this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          task: this.state.newTask,
          done: false
        }
      ]
    })

    this.taskInput.current.value = ''
    this.saveTodos()
  }

  finish(todo) {
    todo.done = true

    this.setState({ todos: this.state.todos })
    this.saveTodos()
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div id="app">
        <form onSubmit={this.addTask}>
          <input
            type="text"
            ref={this.taskInput}
            onChange={e => this.setState({ newTask: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                {todo.done ? (
                  <strike>{todo.task}</strike>
                ) : (
                  <span>{todo.task}</span>
                )}
                <button onClick={() => this.finish(todo)}>Done</button>
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
