import React from 'react';

const Rules = (props) => {
  return (
    <div className={`rules-section ${props.active ? 'active' : ''} `} data-section={props.name}>
      <h2 className="rules-section__header">How Do You Win?</h2>
      <p className="rules-section__row">Typically, the winner of each hand of poker is the player that holds the highest ranked hand when all cards are shown at the end of the hand –known as the ‘showdown’ – or the player that makes the last uncalled bet, thus winning without needing to reach a showdown.</p>
      <p className="rules-section__row">Not sure whether a flush beats a straight? Can’t remember how to make a full house? You can find all the information you need to know about hand rankings in the table below (click here for more). The strongest hands are in the top row, running from left to right, with the weakest possible hand being simply a high card.</p>
      <div className="rules-section__combinations">
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Royal Flush</div>
          <img src="../combinations/royal-flush.png" className="rules-section__combination-img" alt="Royal Flush"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Straight Flush</div>
          <img src="../combinations/straight-flush.png" className="rules-section__combination-img" alt="Straight Flush"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Four of a Kind</div>
          <img src="../combinations/four-of-a-kind.png" className="rules-section__combination-img" alt="Four of a Kind"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Full House</div>
          <img src="../combinations/full-house.png" className="rules-section__combination-img" alt="Full House"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Flush</div>
          <img src="../combinations/flush.png" className="rules-section__combination-img" alt="Flush"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Straight</div>
          <img src="../combinations/straight.png" className="rules-section__combination-img" alt="Straight"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Three of a Kind</div>
          <img src="../combinations/three-of-a-kind.png" className="rules-section__combination-img" alt="Three of a Kind"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Two Pair</div>
          <img src="../combinations/two-pair.png" className="rules-section__combination-img" alt="Two Pair"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">Pair</div>
          <img src="../combinations/pair.png" className="rules-section__combination-img" alt="Pair"/>
        </div>
        <div className="rules-section__combination">
          <div className="rules-section__combination-header">High Card</div>
          <img src="../combinations/high-card.png" className="rules-section__combination-img" alt="High Card"/>
        </div>
      </div>

      <h2 className="rules-section__header">Getting Started</h2>
      <p className="rules-section__row">Poker games typically feature a forced bet, such as the Big Blind and Small Blind in Hold’em and Omaha. These forced bets comprise the starting pot in any given hand of poker, which is the first incentive players have to win the hand. Action arising from the subsequent rounds of betting further increases the size of the pot.</p>

      <h2 className="rules-section__header">Dealing Cards and Betting Rounds</h2>
      <p className="rules-section__row">After any initial cards are dealt, players are usually called upon to act in turn, moving clockwise around the table.</p>
      <p className="rules-section__row">Each player can usually take one of the following actions when it is their turn to act:</p>
      <ul className="rules-section__list">
        <li className="rules-section__list-bullet">
        <strong>Check</strong> – To check is to decline the opportunity to open the betting. Players can only check when there is no bet during the current round, and the act of checking passes the action clockwise to the next person in the hand. If all active players check, those players remain in the hand and the round is considered complete.
        </li>
        <li className="rules-section__list-bullet"><strong>Bet</strong> – Players may bet if no other players have bet during the current round. Once a bet has been made, other players must ‘call’ by matching the amount bet, in order to remain in the hand.</li>
        <li className="rules-section__list-bullet"><strong>Fold</strong> – Players who fold forfeit their cards and cannot win or act again during the current hand.</li>
        <li className="rules-section__list-bullet"><strong>Call</strong> – Players can call if other players have bet during the current round; this requires the calling player to match the highest bet made.</li>
        <li className="rules-section__list-bullet"><strong>Raise</strong> – Players may raise if other players have bet during the current round; this requires the raising player to match the highest bet made, and then make a greater one. All subsequent players are required to call the raise or raise again (‘re-raise’) to stay in the hand.</li>
      </ul>
      <p className="rules-section__row">Different variants of poker have different betting rounds. Texas Hold’em and Omaha are the two most popular poker games in the world and have identical betting structures, with four rounds of betting known as pre-flop, the flop, the turn and the river.</p>
      <p className="rules-section__row">The <strong>pre-flop</strong> betting round begins as soon as all players have received their hole cards, before any community cards have been dealt; betting on <strong>the flop</strong> occurs after the first three community cards are dealt; on <strong>the turn</strong> after the fourth community card; and on <strong>the river</strong> after the fifth and final community card.</p>
      <p className="rules-section__row">On each betting round, betting continues until every player has either matched the bets made or folded (if no bets are made, the round is complete when every player has checked). When the betting round is completed, the next dealing/betting round begins, or the hand is complete.</p>
      <p className="rules-section__row">Here’s an example of a Texas Hold’em hand after all the cards have been dealt. As you can see, players may use any of their two hole cards with any of the five community cards to make the best five-card hand they can make - in this case, you can use both your hole cards and three of the shared community cards to make a straight.</p>

      <h2 className="rules-section__header">Showdown</h2>
      <p className="rules-section__row">Once the last bet or raise has been called during the final round of betting, a showdown occurs; the remaining active players must show or ‘declare’ their hands, and the player(s) with the best ranking hand(s) win the pot.</p>
      <p className="rules-section__row">Players often show their hands in order, rather than all at the same time. Multiple players can share a single pot, with the pot divided in different ways depending on the game rules and how each player’s hand ranks against their opponents.</p>

      <h2 className="rules-section__header">Betting Limits</h2>
      <p className="rules-section__row">Betting limits refer to the amount players may open and raise. Typically, poker games are of the following types; no limit, pot limit or fixed limit.</p>
      <ul className="rules-section__list">
        <li className="rules-section__list-bullet"><strong>No Limit</strong> – in poker games with a no limit betting structure, each player can bet or raise by any amount up to and including their full stack (the total number of chips they possess at any given time) in any betting round, whenever it is their turn to act.</li>
        <li className="rules-section__list-bullet"><strong>Pot Limit</strong> – in poker games with a pot limit betting structure, each player can bet or raise by any amount up to and including the size of the total pot at that time.</li>
        <li className="rules-section__list-bullet"><strong>Fixed Limit</strong> – in poker games with a fixed limit betting structure, each player can choose to call, bet or raise, but only by a fixed amount. The fixed amount for any given betting round is set in advance.</li>
      </ul>
      <p className="rules-section__row">For No Limit and Pot Limit games, the ‘Stakes’ column in the PokerStars lobby indicates the Small Blind and Big Blind in that game, while for Mixed Games, the Stakes listed in the lobby are the betting amounts for Limit games; in Pot Limit and No Limit rounds, the blinds are usually half of the blinds in limit games.</p>

      <h2 className="rules-section__header">Table Stakes and All-in</h2>
      <p className="rules-section__row">You may have seen a poker scene in a movie or on TV where a player is faced with a bet for more chips than they have at the table, and is forced to wager a watch, a car or some other possession in order to stay in the hand. This may make for good drama, but it is not generally the way poker is played in real life!</p>
      <p className="rules-section__row">All games on our site are played ‘table stakes’, meaning only the chips in play at the beginning of each hand can be used during the hand. The table stakes rule has an application called the ‘All-In’ rule, which states that a player cannot be forced to forfeit a poker hand because the player does not have enough chips to call a bet.</p>
      <p className="rules-section__row">A player who does not have enough chips to call a bet is declared All-In. The player is eligible for the portion of the pot up to the point of his final wager. All further action involving other players takes place in a ‘side pot’, which the All-In player is not eligible to win. If more than one player goes All-In during a hand, there could be more than one side pot.</p>
      <p className="rules-section__row">Now you’ve got the rules, what’s stopping you? Download and play!</p>
      <p className="rules-section__row">If you need further help in learning poker basics for all our poker games, please do not hesitate to contact Support.</p>
    </div>
  )
}

export default Rules;