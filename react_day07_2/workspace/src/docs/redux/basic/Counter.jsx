import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseValue } from '../../../modules/count';
import useInput from '../../../hooks/useInput';

const Counter = () => {
  // action을 reducer로 전달해주는 훅함수
  const [value, setValue, onChangeValue] = useInput("");
  const dispatch = useDispatch()
  
  // store
  console.log(useSelector((state) => state))
  const {number} = useSelector((state) => state.count)

  return (
    <div>
      <div>
        <button onClick={() => { dispatch(decrease()) }}>-1</button>
        {number}
        <button onClick={() => { dispatch(increase()) }}>+1</button>
      </div>
      <div>
        <input type="text" value={value} onChange={onChangeValue} />
        {/* 
          정수인지 아닌지 어떻게 검사해야할까???
        */}
        <button onClick={() => { 
          // value가 정수인지 문자열인지 검사하기
          if(!-value) return alert("정수만 입력하세요\nex)10")
          dispatch(increaseValue(+value)) 
        }}>더하기</button>
      </div>
    </div>
  );
};

export default Counter;