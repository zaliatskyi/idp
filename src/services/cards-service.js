import isOnePair from './isOnePair';
import isTwoPairs from './isTwoPairs';
import isThreeOfKind from './isThree';
import isStraight from './isStraight';
import isFlush from './isFlush';
import isFourOfKind from './isFour';

const suits = ["D", "C", "H", "S"],
      names = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

const generateDeck = () => {
  const newArr = [];

  names.map( rank => {
    return suits.map( suit => {
      newArr.push(rank + suit);
      return rank + suit;
    });
  });

  return newArr;
}

const shuffle = array => {
  let currentIndex = array.length,
      temporaryValue,
      randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const getSuitsAndRanks = (cards) => {
  let suits = [],
      ranks = [];

  cards.forEach(element => {
    let isTen = element.length === 3,
        rank = element.slice(0, isTen ? 2 : 1 )
          .replace('J', '11')
          .replace('Q', '12')
          .replace('K', '13')
          .replace('A', '14'),
        suit = element.slice(isTen ? 2 : 1, element.length);

    suits.push(suit);
    ranks.push(parseInt(rank));
  });

  return {
    suits,
    ranks
  }
}

const checkCombination = (combination) => {
  let cardsInfo = getSuitsAndRanks(combination),
      result = isFourOfKind(cardsInfo) ? 'four of a kind' :
              isFlush(cardsInfo) ? 'flush' :
              isStraight(cardsInfo) ? 'straight' :
              isThreeOfKind(cardsInfo) ? 'three of a kind' :
              isTwoPairs(cardsInfo) ? 'two pairs' :
              isOnePair(cardsInfo) ? 'one pair' : 'high card';

  return result;
}
export default class CardsService {
  getDeck = () => shuffle(generateDeck());
  checkCombination = (combination) => checkCombination(combination);
}