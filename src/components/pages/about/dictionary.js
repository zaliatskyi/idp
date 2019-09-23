import React from 'react';

const Dictionary = (props) => {
  return (
    <div className={`rules-section ${props.active ? 'active' : ''} `} data-section={props.name}>
      poker dictionary section
    </div>
  )
}

export default Dictionary;