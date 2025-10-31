import React from 'react';
import { useParams } from 'react-router-dom';

const HobbyContainer = () => {

  // url parameter: url에 parameter를 심어서 전송하는 방법
  const { hobbies } = useParams()
  console.log(useParams())

  return (
    <div>
      <p>취미1: {hobbies}</p>
    </div>
  );
};

export default HobbyContainer;