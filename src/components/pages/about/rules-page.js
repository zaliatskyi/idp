import React, { Component } from 'react';
import Header from '../../header';
import Rules from './rules';
import Strategy from './strategy';
import Dictionary from './dictionary';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './rules.scss';

export default class RulesPage extends Component {
  showSection(e) {
    const target = e.target,
          headers = document.querySelectorAll('.rules-header__list-bullet'),
          approprPageName = target.getAttribute('data-header'),
          approprSection = document.querySelector(`.rules-section[data-section="${approprPageName}"]`),
          sections = document.querySelectorAll('.rules-section');

    if(target.classList.contains('active')) {
      return false;
    }
    headers.forEach(header => {
      header.classList.remove('active');
    });
    sections.forEach(section => {
      section.classList.remove('active');
    });
    target.classList.add('active');
    approprSection.classList.add('active');
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={this.props.match.params === '/rules' ? 'loadComponent' : 'leaveComponent'}
      >
        <Header currentPage="rules"></Header>
        <section className="rules">
          <div className="rules-wrapper">
            <div className="rules-header">
              <ul className="rules-header__list">
                <li className="rules-header__list-bullet active" onClick={ this.showSection } data-header="rules">poker rules</li>
                <li className="rules-header__list-bullet" onClick={ this.showSection } data-header="strategy">poker strategy</li>
                <li className="rules-header__list-bullet" onClick={ this.showSection } data-header="dictionary">poker dictionary</li>
              </ul>
            </div>

            <div className="rules-content">
              <Rules name="rules" active />
              <Strategy name="strategy" />
              <Dictionary name="dictionary" />
            </div>
          </div>
        </section>
      </ReactCSSTransitionGroup>
    )
  }
}