import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'

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
          completed: false,
        }
      ]
    }
  }

  markComplete(id) {
    let index = this.state.todos.findIndex(x => x.id === id);
    let todos = this.state.todos.slice();
    todos[index].completed = !this.state.todos[index].completed;
    this.setState({
      todos: todos
    });

    //let todos = this.state.todos.slice();
    //todos[id-1].completed = !this.state.todos[id-1].completed;
    //this.setState({
    //  todos:todos,
    //});
  }

  deleteItem(id) {
    console.log(id);
    let index = this.state.todos.findIndex(x => x.id ===id);
    let todos = this.state.todos.slice(0,index).concat(this.state.todos.slice(index+1));
    this.setState({
      todos: todos
    })
    
  }

  render() {
    return (
      <div className = "App">
        <Header />
        <Todos 
          todos={this.state.todos} 
          markComplete={(id) => this.markComplete(id)}
          deleteItem={(id) => this.deleteItem(id)}
        />
      </div>
    )
  }
}




export default App;
