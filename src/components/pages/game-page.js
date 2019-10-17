import React, { Component } from 'react';
import Table from '../table';
import Header from '../header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class GamePage extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={this.props.match.params === '/game' ? 'loadComponent' : 'leaveComponent'}
      >
        <Header currentPage="table" />
        <Table />
      </ReactCSSTransitionGroup>
    );
  }
}