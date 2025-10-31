import React from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
  const name = "장보고"
  return (
    <div>
      <CharContext.Provider value={{name: "홍길동", color:"blue"}}>
        <A name={name} />
      </CharContext.Provider>
    </div>
  );
};

export default CharContainer;