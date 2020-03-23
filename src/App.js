import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'Clear input',
        done: true
      },
      {
        id: 2,
        name: 'Add item',
        done: false
      },
      {
        id: 3,
        name: 'Remove item',
        done: false
      },
    ]
  }

  // Delete todo (passed down the ladder to TodoList > Todo)
  delTodo = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ASRC Todo List</h1>
        </header>
        <ul>
          <TodoList
            todos={this.state.todos}
            delTodo={this.delTodo}
          />
        </ul>
      </div>
    );
  }
}

export default App;
