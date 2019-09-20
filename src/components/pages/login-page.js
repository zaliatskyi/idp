import React, { Component } from 'react';
import './login.scss';

export default class LoginPage extends Component {
  constructor(props) {
    super();
  }

  focusInput(e) {
    const target = e.target,
          parent = target.parentElement;

    parent.classList.add('active');
    parent.querySelector('input').focus();
  }

  checkInput(e) {
    const target = e.target,
          parent = target.parentElement;

    if (target.value.length === 0) {
      parent.classList.remove('active');
    }
  }

  submitLogin(e) {
    const target = document.querySelector('.login-window__input');

    if (target.value.length > 0) {
      this.props.history.push('/game');
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login-window">
          <h1 className="login-window__header">
            Welcome to holdem App!
          </h1>

          <div className="login-window__row" onClick={ this.focusInput }>
            <span className="login-window__row-name">enter your name</span>
            <input
              type="text"
              className="login-window__input"
              onBlur={ this.checkInput }
            />
          </div>

          <div className="login-window__btn-wrapper">
            <div className="login-window__btn-bg"></div>
            <button
              className="login-window__btn"
              onClick={ this.submitLogin.bind(this) }
            >submit name</button>
          </div>
        </div>
      </div>
    )
  }
}
