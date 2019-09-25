import occurrencesOf from '../helpers/occurrency';

const isFlush = (cards) => {
  let isFlush = false;

  cards.suits.forEach( (i, el) => {
    if (occurrencesOf(i, cards.suits) >= 5) {
      isFlush = true;
    }
  });

  return isFlush;
}

export default isFlush;