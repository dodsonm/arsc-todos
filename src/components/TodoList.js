import React from 'react';
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem';

import './TodoList.css';

class TodoList extends React.Component {
  render() {
    if (this.props.todos.length === 0) {
      return false;
    }
    return (
      <ul className="TodoList">
        {
          this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              content={todo}
              editTodo={this.props.editTodo}
              delTodo={this.props.delTodo}
            />
          ))
        }
        <li className="TodoItem hide-bullet">
          <AddTodoItem addTodo={this.props.addTodo} />
        </li>
      </ul>
    );
  }
}

export default TodoList;
