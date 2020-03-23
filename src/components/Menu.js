import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav className="Menu">
        <span>Sort by</span>
        <button
          disabled={this.props.sort === 'name'? 'disabled': ''}
          onClick={this.props.sortByName}>Name</button>
        <button
          disabled={this.props.sort === 'id'? 'disabled': ''}
          onClick={this.props.sortByCreation}>Recent</button>
      </nav>
    );
  }
}

export default Menu;
