import React from 'react';

const D = () => {
  return (
    <React.Fragment>
      <h3 className="dictionary__block-header">Dealer</h3>
      <p className="dictionary__block-text">The player in a poker game who actually (or theoretically) is dealing the cards. When a professional dealer (casino or cardroom) or automated dealer (online) is present - it is necessary to identify the player who would be dealing the cards because the blinds and the betting action are to the left of the dealer. This is done by utilizing a marker called a dealer button which travels around the table in a clockwise manner, moving to the next player after each hand is completed.</p>
      <h3 className="dictionary__block-header">Dog</h3>
      <p className="dictionary__block-text">Shortened form of "underdog."</p>
      <h3 className="dictionary__block-header">Dominated Hand</h3>
      <p className="dictionary__block-text">A hand that will almost always lose to a better hand that people usually play. For instance, K3 is "dominated" by KQ. With the exception of strange flops (e.g., 3-3-X, K-3-X), it will usually lose to KQ.</p>
      <h3 className="dictionary__block-header">Draw</h3>
      <p className="dictionary__block-text">To play a hand that is not yet good, but could become so if the right cards come. Example: "I'm not there yet - I'm drawing." Also used as a noun. Example: "I have to call because I have a good draw."</p>
      <h3 className="dictionary__block-header">Draw Dead</h3>
      <p className="dictionary__block-text">Trying to make a hand that, even if made, will not win the pot. If you're drawing to make a flush, and your opponent already has a full house, you are "drawing dead." Of course, this is a bad condition to be in.</p>
    </React.Fragment>
  )
}

export default D;