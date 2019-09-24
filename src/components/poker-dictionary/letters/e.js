import React from 'react';

const E = () => {
  return (
    <React.Fragment>
      <h3 className="dictionary__block-header">Equity</h3>
      <p className="dictionary__block-text">Your "rightful" share of a pot. If the pot contains $80, and you have a 50% chance of winning it, you have $40 equity in the pot. This term is somewhat fanciful since you will either win $80 or $0, but it gives you an idea of how much you can "expect" to win.</p>
      <h3 className="dictionary__block-header">Expectation</h3>
      <p className="dictionary__block-text">(1) The amount you expect to gain on average if you make a certain play. For instance, suppose you put $10 into a $50 pot to draw at a hand that you will make 25% of the time, and it will win every time you make it. Three out of four times, you do not make your draw, and lose $10 each time for a total of $30. The fourth time, you will make your draw, winning $50. Your total gain over those four average hands is $50-$30 = $20, an average of $5 per hand. Thus, calling the $10 has a positive expectation of $5. (2) The amount you expect to make at the poker table in a specific time period. Suppose in 100 hours of play, you win $527. Then your expectation is $5.27/hr. Of course, you won't make that exact amount each hour (and some hours you will lose), but it's one measure of your anticipated earnings.</p>
      <h3 className="dictionary__block-header">Extra Blind</h3>
      <p className="dictionary__block-text">A blind put in by a player just entering the game, returning to the game, or otherwise changing his position at the table. See also "blind" and "post."</p>
    </React.Fragment>
  )
}

export default E;