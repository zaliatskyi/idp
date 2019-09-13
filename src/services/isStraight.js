import occurrencesOf from '../helpers/occurrency';

const isStraight = (cards) => {
  let counter = 0,
      prevElem = cards.ranks[0] - 1,
      sortedRanks = cards.ranks.sort(function(a, b) {
        return a - b;
      });

  console.log('ranks are:', cards.ranks);

  sortedRanks.forEach((rank, index) => {
    // console.log(rank, index, prevElem);
    
    console.log('diff is:', rank, prevElem);
    if ((rank - prevElem) === 1) {
      console.log('this is straight combo!');

      counter++;
    } else if(counter === 5) {
      return true;
    } else {
      counter = 0;
    }

    prevElem = rank;

    console.log('final counter is', counter);
  });
}

isStraight({
  ranks: [2,4,5,6,7, 10, 12]
})

export default isStraight;