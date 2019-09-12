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

export default class CardsService {
  getDeck = () => shuffle(generateDeck());
}