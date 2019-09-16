import occurrencesOf from '../helpers/occurrency';

const isFourOfKind = (cards) => {
  let isFour = false;

  cards.ranks.forEach( (i, el) => {
    if (occurrencesOf(i, cards.ranks) === 4) {
      isFour = true;
    }
  });

  return isFour;
}

export default isFourOfKind;