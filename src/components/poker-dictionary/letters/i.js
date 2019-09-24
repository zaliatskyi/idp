import React from 'react';

const I = () => {
  return (
    <React.Fragment>
      <h3 className="dictionary__block-header">Implied Odds</h3>
      <p className="dictionary__block-text">Pot odds that do not exist at the moment, but may be included in your calculations because of bets you expect to win if you hit your hand. For instance, you might call with a flush draw on the turn even though the pot isn't offering you quite 4:1 odds (your chance of making the flush) because you're sure you can win a bet from your opponent on the river if you make your flush.</p>
      <h3 className="dictionary__block-header">Inside Straight Draw</h3>
      <p className="dictionary__block-text">Seeking one specific card value to make a straight. For instance, a player holding 9-5 with a board of 2-7-6 can make a straight with any eight. This is also known as a gutshot straight draw.</p>
    </React.Fragment>
  )
}

export default I;