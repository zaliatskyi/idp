import React, { Component } from 'react';
import './deck.css';

export default class Deck extends Component {
  render() {
    const { board } = this.props;
  
    return (
      <div className="deck">
        here will be our deck
      </div>
    );
  }
}