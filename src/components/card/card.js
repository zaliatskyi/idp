import React, { Component} from 'react';
import './card.css';

export default class Card extends Component {
  render () {
    const { value } = this.props;

    return <img className="card" src={`./cards/${value}.svg`} alt={`card ${value}`} key={value}/>;
  }
}