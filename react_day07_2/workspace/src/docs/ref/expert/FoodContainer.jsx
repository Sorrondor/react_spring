import React, { useRef, useState } from 'react';

const FoodContainer = () => {

  const inputRef = useRef([]);
  const [foods, setFoods] = useState([]);
  const [checked, setChecked] = useState([])

  const onCLickToAddFood = () => {
    setFoods(
      foods.concat({
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value,
      })
    )
    setChecked(checked.concat(false))
  }

  const onChangeCheckBox = (i) => {
    checked.splice(i, 1, !checked[i])
    setChecked(checked.concat())
  }

  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input type="checkbox" 
        checked={checked[i]}
        onChange={() => {onChangeCheckBox(i)}}
      />
      {`${kor} (${eng})`}
    </li>
  ))

  const onClickToRemoveFood = () => {
    let newLength = foods.filter((food, i) => !checked[i]).length;
    setFoods(foods.filter((food, i) => !checked[i]))
    setChecked(new Array(newLength).fill(false))
  }

  return (
    <div>
      <input type="text" placeholder='한국 음식 이름' ref={(el) => inputRef.current[0] = el}/>
      <input type="text" placeholder='영어 음식 이름' ref={(el) => inputRef.current[1] = el}/>
      <button onClick={onCLickToAddFood}>추가</button>
      <button onClick={onClickToRemoveFood}>삭제</button>
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>
  );
};

export default FoodContainer;