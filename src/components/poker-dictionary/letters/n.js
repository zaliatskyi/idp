import React from 'react';

const N = () => {
  return (
    <React.Fragment>
      <h3 className="dictionary__block-header">No Limit</h3>
      <p className="dictionary__block-text">A version of poker in which a player may bet any amount of chips (up to the number in front of them) whenever it is their turn to act. It is a very different game from limit poker.</p>
      <h3 className="dictionary__block-header">Nuts</h3>
      <p className="dictionary__block-text">The best possible hand given the board. If the board is K-J-T-4-2 with three hearts, then A-X of hearts is the nuts (with X representing a card of any value). You will occasionally hear the term applied to the best possible hand of a certain category, even though it isn't the overall nuts. For the above example, somebody with A-Q might say they had the "nut straight."</p>
    </React.Fragment>
  )
}

export default N;