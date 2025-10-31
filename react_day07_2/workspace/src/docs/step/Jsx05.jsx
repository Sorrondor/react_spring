import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckComponent from './LuckComponent';
import UnLuckyComponent from './UnLuckyComponent';

// age를 상수 나이로 설정한다(임의)
// 19세 초과 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력
// 화면에 랜더링

// 컴포넌트 분리 
const Jsx05 = () => {
  const age = 21
  const isAdult = age > 19
  const isEven = age % 2 === 0

  // const passComponent = <p>입장 가능</p>
  // const notPassComponent = <p>입장 불가</p>
  // const luckyComponent = <p>당첨</p>
  // const unLuckyComponent = <p>꽝</p>
  
  const enter = isAdult ? <PassComponent /> : <NotPassComponent />
  const win = isEven ? <LuckComponent /> : <UnLuckyComponent />

  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;