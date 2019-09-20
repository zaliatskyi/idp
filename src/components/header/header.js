import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
      <img src="../logo.svg" className="logo" alt="poker idp logo" />
        <ul className="nav-list">
          <Link to="/" className="nav-list__item">
            <li >login page</li>
          </Link>
          <Link to="/rules" className="nav-list__item">
            <li>rules</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;