import React from 'react';
import TodoList from './components/TodoList';
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
