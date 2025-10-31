import React from 'react';
import C from './C';
import CharContext from './CharContext';

const B = ({name}) => {
  return (
    <div>
      <C name={name} />
      {/* 5분: context의 color를 B의 글자색에 적용시키기 */}
      <CharContext.Consumer>
        {(context) => (
          <p style={{color: context.color}}>B의 글자!</p>
        )}
      </CharContext.Consumer>
    </div>
  );
};

export default B;