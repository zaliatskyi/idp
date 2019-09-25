import occurrencesOf from '../helpers/occurrency';

const isTwoPairs = (cards) => {
  let resultsArray = [];

  cards.ranks.forEach( (el, i) => {
    if(occurrencesOf(el, cards.ranks) > 1 && resultsArray.indexOf(el) === -1 ) {
      resultsArray.push(el);
    }
  });
  return resultsArray.length === 2 ? true : false;
}

export default isTwoPairs;