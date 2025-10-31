import React from 'react';
import CharContext from './CharContext';

const C = ({name}) => {
  return (
    <div>
      {name}
      <CharContext.Consumer>
        {(context) => context.name}
      </CharContext.Consumer>
    </div>
  );
};

export default C;