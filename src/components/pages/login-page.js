import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './login.scss';
import store from '../../store';
import { Login } from '../../actions';

export default class LoginPage extends Component {
  constructor(props) {
    super();
  }

  focusInput(e) {
    const target = e.target,
          parent = target.closest('.login-window__row');

    parent.classList.add('active');
    parent.querySelector('input').focus();
  }

  checkInput(e) {
    const target = e.target,
          parent = target.closest('.login-window__row'),
          fillError = parent.getAttribute('data-error'),
          amountError = parent.getAttribute('data-max-amount'),
          errorField = parent.querySelector('.login-window__error');

    if (target.value.length === 0) {
      parent.classList.remove('active');
      parent.classList.add('error');
      errorField.innerHTML = fillError;
    } else if (target.getAttribute('type') === 'number' && target.value > 6 ) {
      parent.classList.add('error');
      errorField.innerHTML = amountError;
    } else {
      parent.classList.remove('error');
    }
  }

  submitLogin(e) {
    const inputFields = document.querySelectorAll('.login-window__input[required]');

    inputFields.forEach(input => {
      const parent = input.closest('.login-window__row'),
            fillError = parent.getAttribute('data-error'),
            amountError = parent.getAttribute('data-max-amount'),
            errorField = parent.querySelector('.login-window__error');

      if (input.value.length === 0) {
        parent.classList.remove('active');
        parent.classList.add('error');
        errorField.innerHTML = fillError;
        input.closest('.login-window__row').classList.add('error');
      } else if (input.getAttribute('type') === 'number' && input.value > 3) {
        parent.classList.add('error');
        errorField.innerHTML = amountError;
      } else {
        input.closest('.login-window__row').classList.remove('error');
      }
    });

    if (document.querySelectorAll('.error').length === 0) {
      const playerName = document.getElementById('name').value,
            playersAmount = parseFloat(document.getElementById('players').value);

      store.dispatch(Login(playerName, playersAmount));
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

            <div className="login-window__row" onClick={ this.focusInput } data-error="Name field is required">
              <div className="login-window__row-info">
                <span className="login-window__row-name">enter your name</span>
                <input
                  type="text"
                  className="login-window__input"
                  id="name"
                  onBlur={ this.checkInput }
                  required
                />
              </div>
              <span className="login-window__error"></span>
            </div>

            <div className="login-window__row" onClick={ this.focusInput } data-error="Players field is required" data-max-amount="amount of players should be less than 4">
              <div className="login-window__row-info">
                <span className="login-window__row-name">amount of players</span>
                <input
                  type="number"
                  id="players"
                  className="login-window__input"
                  onBlur={ this.checkInput }
                  required
                />
              </div>
              <span className="login-window__error"></span>
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
