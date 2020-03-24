import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    if (this.props.sort !== '') {
      return (
        <nav className="Menu">
          <span>Sort by</span>
          <button
            disabled={this.props.sort === 'name'? 'disabled': ''}
            onClick={this.props.sortByName}>Name</button>
          <button
            disabled={this.props.sort === 'id'? 'disabled': ''}
            onClick={this.props.sortByCreation}>Creation</button>
        </nav>
      );
    } else {
      return (
        <nav className="Menu">
          <button
            className="Menu-import-btn"
            onClick={this.props.getData}>Import Data</button>
        </nav>

      )
    }
  }
}

export default Menu;
