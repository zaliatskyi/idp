import React, { Component } from 'react';
import Card from '../card';
import './deck.scss';

export default class Deck extends Component {
  render() {
    const { board } = this.props;

    return (
      <div className="deck">
        <div className="deck-cards">
          { board.map( card => {
            return <Card value={card} className="card" key={card} />
          })}
        </div>
      </div>
    );
  }
}