import React, { useRef } from 'react';

const Callback = () => {

  const divRef = useRef()

  // const onClick = (e, data) => {}

  return (
    <div ref={(el) => divRef.current = el}>
      {/* <input type="text" onChange={(e) => {onClick(e, data)}} /> */}
    </div>
  );
};

export default Callback;