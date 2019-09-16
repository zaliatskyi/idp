const isStraight = (cards) => {
  let counter = 0,
      isAcesPresent = cards.ranks.includes(14),
      sortedRanks = (isAcesPresent ? [1, ...cards.ranks] : cards.ranks ).sort(function(a, b) {
        return a - b;
      }), //sort element and push aces to start (if present) cause of it combination with 2 in a row
      prevElem = sortedRanks[0] - 1;

  sortedRanks.forEach((rank, index) => {
    if ((rank - prevElem) === 1) {
      counter++;
    } else if (counter < 5 && !(rank === prevElem)) {
      counter = 1; //to count first element after reset
    }

    prevElem = rank;
  });

  return counter >= 5 ? true : false;
}

export default isStraight;