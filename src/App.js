import React from 'react'

export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      newTask: '',
      todos: [
        {
          id: 1,
          task: 'example',
          done: false
        }
      ]
    }
  }

  render() {
    return (
      <form>
        <input type="text" />
        <button type="submit">Add</button>

        <ul>
          {this.state.todos.map(todo => {
            return (
              <li>
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
      </form>
    )
  }
}

export default App
