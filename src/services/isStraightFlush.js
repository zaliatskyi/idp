import isStraight from './isStraight';
import isFlush from './isFlush';

const isStraightFlush = (cards) => {
  return isStraight(cards) && isFlush(cards) ? true : false;
}

export default isStraightFlush;