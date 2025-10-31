import React from 'react';

const PropsComponent02 = (props) => {

  // 태그를 props로 넘겼을 때
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  );
};

export default PropsComponent02;