import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

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
      </ul>
    );
  }
}

export default TodoList;
