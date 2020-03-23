import React from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="TodoList">
        {
          this.props.todos.map((todo) => (
            <Todo
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
