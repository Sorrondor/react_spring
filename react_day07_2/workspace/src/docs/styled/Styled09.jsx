import React from 'react';
import Button from '../../components/button/style';

const Styled09 = () => {

  const buttonProps = {
    color: "blue",
    font: "h8",
    size: "full",
    border: ""
  }

  return (
    <div>
      <Button {...buttonProps}>나만의 버튼😎</Button>
    </div>
  );
};

export default Styled09;