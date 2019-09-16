import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
      <img src="../logo.svg" className="logo" alt="poker idp logo" />
        <ul className="nav-list">
          <Link to="/login">
            <li className="nav-list__item">login page</li>
          </Link>
          <Link to="/game">
            <li className="nav-list__item">table</li>
          </Link>
          <Link to="/rules">
            <li className="nav-list__item">rules</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;