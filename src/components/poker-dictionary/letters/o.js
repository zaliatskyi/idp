import React from 'react';

const O = () => {
  return (
    <React.Fragment>
      <h3 className="dictionary__block-header">Offsuit</h3>
      <p className="dictionary__block-text">A Hold'em starting hand with two cards of different suits.</p>
      <h3 className="dictionary__block-header">One-Gap</h3>
      <p className="dictionary__block-text">A Hold'em starting hand with two cards two apart in rank. Examples: J9s, 64.</p>
      <h3 className="dictionary__block-header">Open-Ended Straight Draw</h3>
      <p className="dictionary__block-text">Seeking one of two card values to make a straight. For instance, a player holding 9-8 with a board of 2-7-6 can make a straight with either a ten (6-7-8-9-T) or with a five (5-6-7-8-9). This is also known as an up-and-down straight draw.</p>
      <h3 className="dictionary__block-header">Out</h3>
      <p className="dictionary__block-text">A card that will make your hand win. Normally heard in the plural. Example: "Any spade will make my flush, so I have nine outs."</p>
      <h3 className="dictionary__block-header">Outrun</h3>
      <p className="dictionary__block-text">To beat. Example: "Susie outran my set when her flush card hit on the river."</p>
      <h3 className="dictionary__block-header">Overcall</h3>
      <p className="dictionary__block-text">To call a bet after one or more others players have already called.</p>
      <h3 className="dictionary__block-header">Overcard</h3>
      <p className="dictionary__block-text">A card higher than any card on the board. For instance, if you have AQ and the flop comes J-7-3, you don't have a pair, but you have two overcards.</p>
      <h3 className="dictionary__block-header">Overpair</h3>
      <p className="dictionary__block-text">A pocket pair higher than any card on the flop. If you have QQ and the flop comes J-8-3, you have an overpair.</p>
    </React.Fragment>
  )
}

export default O;