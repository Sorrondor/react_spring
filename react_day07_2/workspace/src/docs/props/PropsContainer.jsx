import React from 'react';
import PropsComponent from './PropsComponent';
import PropsComponent02 from './PropsComponent02';
import PropsComponent03 from './PropsComponent03';

const PropsContainer = () => {
  const name = "홍길동"
  const age = 20
  const style = {
    color : "blue"
  }

  const printName = (name) => {
    console.log(name)
  }

  return (
    <div>
      <PropsComponent name={name} age={age} />
      <PropsComponent02>
        <span style={style}>내 이름은 {name}😎</span>
      </PropsComponent02>

      {/* 
        실습 
        이름을 콘솔에 출력해주는 함수를 만들어서 Props로 넘기고,
        PropsComponent03에서 사용하기
      */}
      <PropsComponent03 printName={printName} />
    </div>
  );
};

export default PropsContainer;