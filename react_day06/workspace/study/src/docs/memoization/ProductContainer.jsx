import React, { useCallback, useMemo, useState } from 'react';
import Amount from './Amount';

const ProductContainer = () => {
  console.log("부모 랜더링👳‍♀️")

  const containerDivStyle = {
    width : "500px",
    height : "300px",
    margin : "20px auto"
  }

  const productStyle = {
    border : "solid 1px lightgray",
    padding : "30px",
    lineHeight : "1.3"
  }

  const divStyle = {
    border : "solid 1px blue",
    height : "60px",
    display : "flex",
    justifyContent : "space-evenly",
    alignItem : "center",
    marginTop : "20px",
    padding : "20px"
  }

  const buttonStyle = {
    width : "40px",
    height : "40px"
  }


  const [like, setLike] = useState(720)
  const [unLike, setUnLike] = useState(10)
  const [amount, setAmount] = useState(1)
  const [coupon, setCoupon] = useState(0)
  
  const increaseLike = () => setLike(like + 1)
  const increaseUnLike = () => setUnLike(unLike + 1)

  // 자식 온클릭 메서드
  const addAmount = () => setAmount(amount + 1)
  const subtractAmount = () => setAmount(amount - 1)
  const addCoupon = () => setCoupon(coupon + 1)
  const subtractCoupon = () => setCoupon(coupon - 1)

  // memoization
  // useMemo 변수(값)
  const amountMemo = useMemo(() => {
    console.log("amount 연산!")
    return amount
  }, [amount])

  const couponMemo = useMemo(() => {
    console.log("coupon 연산!")
    return coupon
  }, [coupon])

  // useCallback 함수
  const addAmountCallback = useCallback(() => { 
    console.log("amount callback");
    setAmount(amount + 1) 
  }, [amount])
  const subtractAmountCallback = useCallback(() => { 
    console.log("amount callback");
    setAmount(amount - 1) 
  }, [amount])
  const addCouponCallback = useCallback(() => { 
    console.log("coupon callback");
    setCoupon(coupon + 1) 
  }, [coupon])
  const subtractCouponCallback = useCallback(() => { 
    console.log("coupon callback");
    setCoupon(coupon - 1) 
  }, [coupon])

  const props = { 
    divStyle, buttonStyle, 
    amountMemo, couponMemo, 
    addAmountCallback, subtractAmountCallback, addCouponCallback, subtractCouponCallback 
  }

  return (
    <div style={containerDivStyle}>
      <div style={productStyle}>
        <p>[책] 열 아홉 스물, 그 사이 스물 하나</p>
        <p>저자: 이승찬</p>
        <button onClick={increaseLike}>좋아요 {like}</button>
        <button onClick={increaseUnLike}>싫어요 {unLike}</button>
        <Amount {...props} />
      </div>
    </div>
  );
};

export default ProductContainer;