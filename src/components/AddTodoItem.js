import React, { Component } from 'react';
import './AddTodoItem.css';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="AddTodoItem">
        <input
          className="AddTodoItem-input"
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Add Todo ..."
          onChange={this.onChange}
        />
      </form>
    )
  }
}

export default AddTodo
