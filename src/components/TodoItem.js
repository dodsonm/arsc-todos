import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  render() {
    const { id, name } = this.props.content;
    return (
      <li className="TodoItem">
        <input
          type="text"
          name="title"
          value={ name }
          className="TodoItem-input"
          onChange={this.props.editTodo.bind(this, id, name)}
        />
        <button
          className="TodoItem-del"
          onClick={this.props.delTodo.bind(this, id)}
        >x</button>
      </li>
    );
  }
}

export default TodoItem;
