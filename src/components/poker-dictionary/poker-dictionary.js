import React, { Component } from 'react';
import './poker-dictionary.scss';
import { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V } from './letters';
export default class PokerDictionary extends Component {
  showApproprLetter(e) {
    const target = e.target,
          headers = document.querySelectorAll('.dictionary__letter'),
          approprPageName = target.getAttribute('dictionary-letter'),
          approprSection = document.querySelector(`.dictionary__block[dictionary-letter-block="${approprPageName}"]`),
          sections = document.querySelectorAll('.dictionary__block');
          console.log("TCL: PokerDictionary -> showApproprLetter -> sections", sections)

    if(target.classList.contains('active')) {
      return false;
    }
    headers.forEach(header => {
      header.classList.remove('active');
    });
    sections.forEach(section => {
      section.classList.remove('active');
    });
    target.classList.add('active');
    approprSection.classList.add('active');
  }

  render() {
    const letters = {
      a: <A />,
      b: <B />,
      c: <C />,
      d: <D />,
      e: <E />,
      f: <F />,
      g: <G />,
      h: <H />,
      i: <I />,
      j: <J />,
      k: <K />,
      l: <L />,
      m: <M />,
      n: <N />,
      o: <O />,
      p: <P />,
      q: <Q />,
      r: <R />,
      s: <S />,
      t: <T />,
      u: <U />,
      v: <V />
    }

    return (
      <div className="dictionary">
        <div className="dictionary__header">
          {
            Object.keys(letters).map((letter, i) => {
              return <div className={`dictionary__letter ${i === 0 ? 'active' : ''}`} dictionary-letter={letter} key={`dictionary-letter ${letter}`} onClick={this.showApproprLetter}>{letter}</div>
            })
          }
        </div>

        <div className="dictionary__body">
          {
            Object.keys(letters).map((letter, i) => {
              return (
                <div className={`dictionary__block ${i === 0 ? 'active' : ''}`} dictionary-letter-block={letter} key={`dictionary-block ${letter}`}>
                  {letters[letter]}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
