import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import './header.scss';
import './hamburger.scss';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      hamburgerOpened: false
    }
  }

  toggleHeader = () => {
    const { hamburgerOpened } = this.state;

    this.setState((state) => {
      return {
        hamburgerOpened: hamburgerOpened ? false : true
      }
    });
  }

  render() {
    const { currentPage } = this.props,
          { hamburgerOpened } = this.state,
          { playerName  } = store.getState();

    return (
      <header className="header">
        <nav className="nav">
          <div className="nav__left">
            <img src="../logo.svg" className="logo" alt="poker idp logo" />
            <ul className={`nav-list ${ hamburgerOpened ? 'nav-list--active' : '' }`}>
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
          </div>
          <span className="header__user">Welcome, {playerName}!</span>
          <div className={`hamburger ${hamburgerOpened ? 'hamburger--active' : ''}`} onClick={ this.toggleHeader }>
            <div className="hamburger__line hamburger__line--top"></div>
            <div className="hamburger__line hamburger__line--medium"></div>
            <div className="hamburger__line hamburger__line--bottom"></div>
          </div>
        </nav>
      </header>
    )
  }
}