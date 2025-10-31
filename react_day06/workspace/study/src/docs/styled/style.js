// import styled from "styled-components";

// const S = {}

//   S.Box = styled.div`
//     border: solid 1px black;
//   `

//   S.P = styled.p`
//     font-size: 14px;
//   ` 

// export default S;


// Div, Button
// Div: width, height, background-color
// Button: border, font-size

import styled from 'styled-components'
import { flexBeetweenRow, flexCenter, flexCenterColumn, h1, h1Bold } from '../../styles/common'

const S = {}

  S.Div = styled.div`
    width: 100px;
    height: 100px;
    border: dashed 1px blue;
  `

  S.Button = styled.button`
    border: none;
    font-size: 30px;
  `

  S.P = styled.p`
    color : ${(props) => props.fontColor};
  `

  S.H1 = styled.h1`
    color: ${(props) => props.color}
  `

  S.Box = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px black;
    ${flexCenter}
  `

  S.Ul = styled.ul`
    width: 500px;
    ${flexBeetweenRow}
  `

  S.Form = styled.form`
    ${flexCenterColumn}
  `

  S.Wrap = styled.div`
    ${flexCenterColumn}
    align-items: flex-start;

    /* 자식과 자손 */
    /* &:자기 자신 선택자 */
    & input {
      width: 200px;
      height: 20px;
    }

    & > span {
      font-weight: 800;
    }

    #id {
      color: blue;
    }

    .password {
      color: green;
    }

  `

  S.Test = styled.p`
  `

  S.ThemeButton = styled.button`
    ${h1Bold}
  `

  S.Input = styled.input`
    /* color : ${(props) => {return props.theme.PALLETE["secondary"]}} */
    color : ${({theme}) => theme.PALLETE["secondary"]}
  `

export default S;
