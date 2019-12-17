import React from 'react'

export class App extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <button type="submit">Add</button>

        <ul>
          <li>
            <span>Example task</span>
            <button>Done</button>
          </li>
        </ul>

        <h4>Completed</h4>
        <ul>
          <li>
            <span>Example task</span>
            <button>Done</button>
          </li>
        </ul>
      </form>
    )
  }
}

export default App
