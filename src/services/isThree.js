import occurrencesOf from '../helpers/occurrency';

const isThreeOfKind = (cards) => {
  let isThree = false;

  cards.ranks.forEach( (i, el) => {
    if (occurrencesOf(i, cards.ranks) === 3) {
      isThree = true;
    }
  });

  return isThree;
}

export default isThreeOfKind;