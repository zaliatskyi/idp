import React, { Component } from 'react';
import './players.css';

export default class Players extends Component {
  
  render() {
    const { players } = this.props

    return (
      <div className="players">
        here will be our players
      </div>
    )
  } 
}