import React from 'react';
import './TodoItem.css';

class Todo extends React.Component {

  render() {
    const { id, name } = this.props.content;
    return (
      <li className="Todo">
        <input className="Todo-input" type="text" value={ name } />
        <button
          className="Todo-del"
          onClick={this.props.delTodo.bind(this, id)}
        >x</button>
      </li>
    );
  }
}

export default Todo;
