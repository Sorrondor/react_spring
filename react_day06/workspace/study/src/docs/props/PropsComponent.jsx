import React from 'react';

const PropsComponent = (props) => {
  console.log(props)
  const {name, age} = props
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
};

export default PropsComponent;