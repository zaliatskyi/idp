import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


export default class Header extends Component {
  render() {
    const { currentPage } = this.props;

    return (
      <header className="header">
        <nav className="nav">
        <img src="../logo.svg" className="logo" alt="poker idp logo" />
          <ul className="nav-list">
            <Link to="/" className="nav-list__item">
              <li >login page</li>
            </Link>
            {
              currentPage !== 'table' && <Link to="/game" className="nav-list__item">
                <li>table</li>
              </Link>
            }
            {
              currentPage !== 'rules' && <Link to="/rules" className="nav-list__item">
                <li>rules</li>
              </Link>
            }
          </ul>
        </nav>
      </header>
    )
  }
}