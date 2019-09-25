import occurrencesOf from '../helpers/occurrency';


const isFullHouse = (cards) => {
  let resultsArray = [];

  cards.ranks.forEach( (el, i) => {
    if(occurrencesOf(el, cards.ranks) >= 2 ) {
      resultsArray.push(el);
    }
  });

  return resultsArray.length >= 5 ? true : false;
}

export default isFullHouse;