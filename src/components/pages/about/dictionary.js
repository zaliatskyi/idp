import React from 'react';
import PokerDictionary from '../../poker-dictionary';

const Dictionary = (props) => {
  return (
    <div className={`rules-section ${props.active ? 'active' : ''} `} data-section={props.name} >
      <PokerDictionary />
    </div>
  )
}

export default Dictionary;