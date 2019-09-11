import React, { Component } from 'react';
import Card from '../card';
import './deck.css';

export default class Deck extends Component {
  render() {
    const { board } = this.props;

    return (
      <div className="deck">
        {board.length > 0 && <div className="deck-header">our current deck is:</div>}
        <div className="deck-cards">
          { board.map( card => {
            return <Card value={card} className="card" key={card} />
          })}
        </div>
      </div>
    );
  }
}