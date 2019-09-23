import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      parent.classList.add('error');
    } else {
      parent.classList.remove('error');
    }
  }

  submitLogin(e) {
    const inputFields = document.querySelectorAll('.login-window__input[required]');

    inputFields.forEach(input => {
      input.value.length === 0 ? input.parentElement.classList.add('error') : input.parentElement.classList.remove('error');
    });

    if (document.querySelectorAll('.error').length === 0) {
      this.props.history.push('/game');
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={this.props.match.params === '/' ? 'loadComponent' : 'leaveComponent'}
      >
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
                id="name"
                onBlur={ this.checkInput }
                required
              />
              <span className="login-window__error">Name field is required</span>
            </div>

            <div className="login-window__row" onClick={ this.focusInput }>
              <span className="login-window__row-name">amount of players</span>
              <input
                type="text"
                id="players"
                className="login-window__input"
                onBlur={ this.checkInput }
                required
              />
              <span className="login-window__error">Players field is required</span>
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
      </ReactCSSTransitionGroup>
    )
  }
}
