import React, { Component } from 'react';
import Card from '../card';
import './players.css';

export default class Players extends Component {
  
  render() {
    const { players } = this.props

    return (
      <div className="players">
        {
          players.map( (player, playerIndex) => {
            return (
              <div className="player" key={`player${playerIndex + 1}`}>
                player {playerIndex + 1}
                <div className="cards">
                  {player.map( card => {
                    return <Card value={card} className="card" />
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