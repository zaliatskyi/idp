import React, { Component } from 'react';
import Card from '../card';
import './players.scss';

export default class Players extends Component {
  
  render() {
    const { players } = this.props

    return (
      <div className="players">
        {
          players.map((player, playerIndex) => {
            return (
              <div className={`player player${playerIndex + 1}`} key={`player${playerIndex + 1}`}>
                <div className="player-seat"></div>
                <div className="player-name">player {playerIndex + 1}</div>
                <div className="cards">
                  {player.map( card => {
                    return <Card value={card} className="card" key={card} />
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  } 
}