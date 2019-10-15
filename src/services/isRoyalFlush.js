import isFlush from './isFlush';

const isRoyalFlush = (cards) => {
  let isRoyal = true,
      royalArr = ['10', 'J', 'Q', 'K', 'A'];

  royalArr.some(rank => {
    if (!cards.ranks.includes(rank)) {
      isRoyal = false;
    }
  });

  return isRoyal && isFlush(cards) ? true : false;
}

export default isRoyalFlush;