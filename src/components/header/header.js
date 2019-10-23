import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import './header.scss';

export default class Header extends Component {
  render() {
    const { currentPage } = this.props,
          { playerName  } = store.getState();

    return (
      <header className="header">
        <nav className="nav">
          <img src="../logo.svg" className="logo" alt="poker idp logo" />
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/" className="nav-list__link">
                login page
              </Link>
            </li>
            {
              currentPage !== 'table' &&
              <li className="nav-list__item">
                <Link to="/game" className="nav-list__link">
                  table
                </Link>
              </li>
            }
            {
              currentPage !== 'rules' &&
              <li className="nav-list__item">
                <Link to="/rules" className="nav-list__link">
                  rules
                </Link>
              </li>
            }
          </ul>
        </nav>

        <span className="header__user">Welcome, {playerName}!</span>
      </header>
    )
  }
}