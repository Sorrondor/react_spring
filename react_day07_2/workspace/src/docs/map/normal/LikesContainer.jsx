import React, { useState } from 'react';

const LikesContainer = () => {

  const [likeList, setLikeList] = useState(
    [
      {
        name : "운동"
      },
      {
        name : "게임"
      },
      {
        name : "음악"
      },
      {
        name : "코딩"
      },
    ]
  )

  // 1. likeList를 화면에 출력한다.
  // 2. 버튼을 누르면 해당 like를 삭제한다.
  // 3. input 태그를 하나 생성 후 좋아하는 목록을 적고 엔터를 치면, 
  // 리스트에 추가된다.
  const removeButton = (index) => {
    setLikeList(likeList.filter((like, i) => i !== index))
  }

  const buttonList = likeList.map(({name}, i) => (
    <button key={i} onClick={() => removeButton(i)}>{name}</button>
  ))
  
  const addLike = (e) => {
    if(e.key === 'Enter'){
      // setLikeList([...likeList, {name: e.target.value}])
      setLikeList(likeList.concat({name: e.target.value}))
    }
  }

  return (
    <div>
      {buttonList}
      <div>
        <input 
          type="text" 
          placeholder='좋아하는 목록을 입력😉' 
          onKeyDown={addLike} 
        />
      </div>
    </div>
  );
};

export default LikesContainer;