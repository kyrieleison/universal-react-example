import React from 'react';
import { Link } from 'react-router';
import styles from './app.css';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to my App</h2>
        <ul>
          <li className={ styles.hoge }><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
