import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id:1,
          title: 'Return Macbook',
          completed: false,
        },
        {
          id:2,
          title: 'Learn React',
          completed: false,
        },
        {
          id:3,
          title: 'File Tax',
          completed: false,
        },
        {
          id:4,
          title: 'test',
          completed: true,
        }
      ]
    }
  }

  handleChange(id) {
    let todos = this.state.todos.slice();
    todos[id-1].completed = !this.state.todos[id-1].completed;
    this.setState({
      todos:todos,
    });
  }

  render() {
    return (
      <div className = "App">
        <Todos todos={this.state.todos} onChange={(id) => this.handleChange(id)}/>
      </div>
    )
  }
}




export default App;
