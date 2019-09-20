import React, { Component } from 'react';
import Header from '../header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './rules.scss';
export default class RulesPage extends Component {
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
            this is rules content
          </div>
        </section>
      </ReactCSSTransitionGroup>
    )
  }
}