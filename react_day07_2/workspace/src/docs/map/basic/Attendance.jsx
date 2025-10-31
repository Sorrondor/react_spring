import React from 'react';

const Attendance = ({student}) => {
  const {name, isPresent} = student

  return (
    <li style={isPresent ? {color: "blue"} : {fontSize: "10px"}}>이름: {name}</li>
  );
};

export default Attendance;