import isOnePair from './isOnePair';
import isTwoPairs from './isTwoPairs';

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
        rank = element.slice(0, isTen ? 2 : 1 ),
        suit = element.slice(isTen ? 2 : 1, element.length);

    suits.push(suit);
    ranks.push(rank);
  });

  return {
    suits,
    ranks
  }
}

const checkCombination = (combination) => {
  let cardsInfo = getSuitsAndRanks(combination),
      result = isTwoPairs(cardsInfo) ? 'two pairs' : isOnePair(cardsInfo) ? 'one pair' : 'no combo';

  // console.log('our result is:', result);
  // console.log('here we have such info', cardsInfo);
  // console.group();
  // console.log('current combination is:', combination);
  // console.log('result is:', result);
  // console.groupEnd();

  return result;
}

export default class CardsService {
  getDeck = () => shuffle(generateDeck());
  checkCombination = (combination) => checkCombination(combination);
}