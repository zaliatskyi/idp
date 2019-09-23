import React from 'react';
import './poker-dictionary.scss';

const PokerDictionary = () => {
  return (
    <div className="dictionary">
      <div className="dictionary__header">
        <div className="dictionary__letter" dictionary-letter="a">a</div>
        <div className="dictionary__letter" dictionary-letter="b">b</div>
        <div className="dictionary__letter" dictionary-letter="c">c</div>
        <div className="dictionary__letter" dictionary-letter="d">d</div>
        <div className="dictionary__letter" dictionary-letter="e">e</div>
        <div className="dictionary__letter" dictionary-letter="f">f</div>
        <div className="dictionary__letter" dictionary-letter="g">g</div>
        <div className="dictionary__letter" dictionary-letter="h">h</div>
        <div className="dictionary__letter" dictionary-letter="i">i</div>
        <div className="dictionary__letter" dictionary-letter="j">j</div>
        <div className="dictionary__letter" dictionary-letter="k">k</div>
        <div className="dictionary__letter" dictionary-letter="l">l</div>
        <div className="dictionary__letter" dictionary-letter="m">m</div>
        <div className="dictionary__letter" dictionary-letter="n">n</div>
        <div className="dictionary__letter" dictionary-letter="o">o</div>
        <div className="dictionary__letter" dictionary-letter="p">p</div>
        <div className="dictionary__letter" dictionary-letter="q">q</div>
        <div className="dictionary__letter" dictionary-letter="r">r</div>
        <div className="dictionary__letter" dictionary-letter="s">s</div>
        <div className="dictionary__letter" dictionary-letter="t">t</div>
        <div className="dictionary__letter" dictionary-letter="u">u</div>
        <div className="dictionary__letter" dictionary-letter="v">v</div>
      </div>

      <div className="dictionary__body">
        <div className="dictionary__block" dictionary-letter-block="a">
          this is letter a
        </div>

        <div className="dictionary__block" dictionary-letter-block="b">
          this is letter b
        </div>
      </div>
    </div>
  )
}

export default PokerDictionary;