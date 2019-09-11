import React, { Component} from 'react';
import './card.css';

export default class Card extends Component {
  render () {
    const { value } = this.props;

    return (
      <div className={`card card-${value}`}>
        <img src={`./cards/${value}.svg`} alt=""/>
      </div>
    )
  }
}