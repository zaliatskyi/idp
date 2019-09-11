import React, { Component } from 'react';
import Deck from '../deck';
import Players from '../players';
import CardsService from '../../services/cards-service';

const cardsService = new CardsService();

export default class Table extends Component {
  constructor(props) {
    super();

    this.state = { 
      board: [],
      playersNumber: 3,
      players: [],
      deck: cardsService.getDeck(),
      cardsAreDealt: false,
      isFlop: true,
      isLast: false
    };
  }

  componentDidUpdate() {
    console.log('state is:', this.state);
  }

  dealCards = () => {
    let { playersNumber, deck } = this.state,
          playersArr = [],
          counter = 0,
          newDeck = deck;

    this.setState( (state) => {
      for (counter; counter < playersNumber; counter++ ) {
        let cards = [newDeck[0], newDeck[1]];
  
        newDeck = newDeck.slice(2, newDeck.length);
        playersArr.push(cards);
      }
      
      return {
        players: playersArr,
        deck: newDeck,
        cardsAreDealt: true
      }
    });
  }

  getTableCard = () => {
    const { deck, board, isFlop } = this.state,
          currentCards = deck.slice(0,isFlop ? 3 : 1),
          newDeck = deck.slice(isFlop ? 3 : 1, deck.length);

    this.setState( (state) => {
      const { isLast } = this.state;

      return {
        board: isLast ? board : board.concat(currentCards),
        deck: newDeck,
        isFlop: false,
        isLast: board.length >= 4 ? true : false
      }
    });
  }

  render() {
    const {
      board,
      players,
      isFlop,
      isLast,
      cardsAreDealt,
      playersNumber
    } = this.state;

    return (
      <div className="table">
        <div className="deck-btns">
          {
            !cardsAreDealt && <button className="btn btnCard" onClick={this.dealCards} >
              { 'deal cards'}
            </button>
          }
          {
            !isLast && cardsAreDealt && playersNumber > 0 &&
            <button className="btn btnCard" onClick={this.getTableCard} >
              { isFlop ? 'take flop' : 'take card'}
            </button>
          }
        </div>
        <Deck board={board} />
        <Players players={players} />
      </div>
    )
  }
}