import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Wake up',
          completed: true,
        },
        {
          id: uuid.v4(),
          title: 'Return Macbook',
          completed: false,
        },
        {
          id: uuid.v4(),
          title: 'Learn React',
          completed: false,
        },
        {
          id: uuid.v4(),
          title: 'File Tax',
          completed: false,
        },
      ]
    }
  }

  markComplete(id) {
    const index = this.state.todos.findIndex(x => x.id === id);
    const todos = this.state.todos.slice();
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
    const index = this.state.todos.findIndex(x => x.id === id);
    const todos = this.state.todos.slice(0, index).concat(this.state.todos.slice(index + 1));
    this.setState({
      todos: todos
    })

  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v1(),
      title: title,
      completed: false
    }
    const todos = this.state.todos.slice().concat(newTodo);
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={id => this.markComplete(id)}
            deleteItem={id => this.deleteItem(id)}
          />
        </div>
      </div>
    )
  }
}




export default App;
