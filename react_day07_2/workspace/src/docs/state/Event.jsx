import React from 'react';

const Event = () => {
  const a = function (eventObject){ 
    console.log(eventObject) 
  }
  return (
    <div>
      <input type="text" onChange={a}/>
    </div>
  );
};

export default Event;