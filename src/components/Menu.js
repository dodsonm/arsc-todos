import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav className="Menu">
        <span>Sort by</span>
        <button onClick={this.props.sortByName}>Name</button>
        <button onClick={this.props.sortByCreation}>Recent</button>
      </nav>
    );
  }
}

export default Menu;
