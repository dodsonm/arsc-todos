import React from 'react';
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem';

import './TodoList.css';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="TodoList">
        {
          this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              content={todo}
              delTodo={this.props.delTodo}
            />
          ))
        }
        <li>
          <AddTodoItem addTodo={this.props.addTodo} />
        </li>
      </ul>
    );
  }
}

export default TodoList;
