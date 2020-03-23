import React from 'react';
import TodoList from './components/TodoList';
import Menu from './components/Menu';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  // add a placeholder on state for our json
  state = {
    todos: []
  }

  componentWillMount() {
    axios
      .get('dat-todos.json')
      .then(res => {
        this.setState({ todos: res.data });
      });
  }

  sortByName = () => {
    const todos = this.state.todos;

    todos.sort((a,b) => {
      const nameA = a.name,
            nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ todos: todos });
  }

  sortByCreation = () => {
    const todos = this.state.todos;
    todos.sort((a,b) => {
      return a.id - b.id;
    });
    this.setState({ todos: todos });
  }

  // Add todo passed down the ladder to TodoList > AddTodoItem
  addTodo = (name) => {
    const newTodo = {
      id: this.getNextId(),
      name: name
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  // Edit todo passed down the ladder to TodoList > TodoItem
  editTodo = (id, name) => {
    console.log(id, name);
  }
  // Delete todo passed down the ladder to TodoList > TodoItem
  delTodo = (id) => {
    console.log(id);
  }

  getNextId = () => {
    const ids = this.state.todos.map(t => t.id);
    const newId = ids.sort().reverse()[0] + 1;
    return newId;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ASRC Todo List</h1>
        </header>
        <Menu
          sortByName={this.sortByName}
          sortByCreation={this.sortByCreation}
        />
        <ul>
          <TodoList
            todos={this.state.todos}
            addTodo={this.addTodo}
            editTodo={this.editTodo}
            delTodo={this.delTodo}
          />
        </ul>
      </div>
    );
  }
}

export default App;
