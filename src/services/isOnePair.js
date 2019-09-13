import occurrencesOf from '../helpers/occurrency';

const isOnePair = (cards) => {
  let isPair = false;

  cards.ranks.forEach( (i, el) => {
    if (occurrencesOf(i, cards.ranks) > 1) {
      isPair = true;
    }
  });

  return isPair;
}

export default isOnePair;