import React, { Component } from 'react';
import Card from '../card';
import './players.scss';

export default class Players extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false
    }
  }

  render() {
    const { players } = this.props,
          { isVisible } = this.state;

    return (
      <div className="players">
        {
          Object.keys(players).map((playerIndex) => {
            const { cards, result } = players[playerIndex],
                  index = parseFloat(playerIndex) + 1;
            // console.log('result isasdas', players[playerIndex].cards);
            return (
              <div className={`player player${index} ${isVisible ? 'show' : 'hidden'}`} key={`player${index}`}>
                <div className="player-seat"></div>
                <div className="player-name">player {index}</div>
                <div className="cards">
                  {cards.map( card => {
                    return <Card value={card} className="card" key={card} />
                  })}
                </div>
                <div className={`player-result`}>{result}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}