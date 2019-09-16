import isFlush from './isFlush';

const isRoyalFlush = (cards) => {
  let isRoyal = false;

  cards.ranks.every((val) => {
    if ([10, 11, 12, 13, 14].includes(val)) {
      isRoyal = true;
    }
  });

  return isRoyal && isFlush(cards) ? true : false;
}

export default isRoyalFlush;