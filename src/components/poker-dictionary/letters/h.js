import React from 'react';

const H = () => {
  return (
    <React.Fragment>
      <h3 className="dictionary__block-header">Heads Up</h3>
      <p className="dictionary__block-text">A pot that is being contested by only two players. Example: "It was heads up by the turn."</p>
      <h3 className="dictionary__block-header">Hit</h3>
      <p className="dictionary__block-text">As in "the flop hit me," meaning the flop contains cards that help your hand. If you have AK, and the flop comes K-7-2, it hit you.</p>
      <h3 className="dictionary__block-header">Hole Cards</h3>
      <p className="dictionary__block-text">Cards dealt face-down to a player - most commonly used when describing the first two player cards in Hold'em and the first four player cards in Omaha.</p>
      <h3 className="dictionary__block-header">House</h3>
      <p className="dictionary__block-text">The establishment running the game. Example: "The $2 you put on the button goes to the house."</p>
    </React.Fragment>
  )
}

export default H;