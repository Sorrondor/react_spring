import React, { useState } from 'react';

const ProductContainer = () => {

  const [message, setMessage] = useState("")
  const [store, setStore] = useState({
    income : 0,
    productList : [
      {
        name : "노트북",
        price: 300000
      },
      {
        name : "키보드",
        price: 50000
      },
      {
        name : "마우스",
        price: 30000
      },
      {
        name : "스피커",
        price: 75000
      },
      {
        name : "마이크",
        price: 150000
      },
    ]
  }) 

  const productList = store.productList.map((product, i) => (
    <li key={i}>
      <p>상품명: {product.name}</p>
      <p>가격: {product.price.toLocaleString()}원</p>
    </li>
  ))

  const buyProduct = (e) => {
    const {income, productList} = store;
    const product = e.target.value;
    const productNames = productList.map(({name}) => name)
    const index = productNames.indexOf(product)
    const isProduct = productNames.includes(product)

    if(e.key === 'Enter'){
      console.log(product)
      if(isProduct){
        setMessage("거래 완료")
        setStore({
          income: income + productList[index].price, 
          productList: productList.filter((_, i) => i !== index)
        })
      }else if(!isProduct){
        setMessage("거래 불가")
      }else if(productList.length === 0){
        setMessage("판매 불가")
      }else {
        setMessage("")
      }
    }
  }
  
  return (
    <div style={{marginBottom: "400px"}}>
      <h1>상점 총수익: {store.income}</h1>
      <ul>
        {productList}
      </ul>
      <p>{message}</p>
      <input 
        type="text" placeholder='구매할 상품을 입력하세요.'
        onKeyDown={buyProduct}
      />
    </div>
  );
};

export default ProductContainer;