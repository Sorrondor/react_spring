import { createAction, handleActions } from 'redux-actions'

// dux패턴
// type
const INCREASE = "count/INCREASE"
const DECREASE = "count/DECREASE"

// action
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

// state
const initialState = {
  number : 0 
}

// const reducer = (state, action) => {
//   switch(action.type){
//     case INCREASE:
//       action.setNumber(state.number + 1)
//       break
//     case DECREASE:
//       action.setNumber(state.number - 1)
//       break
//     default:
//   }
// }

// reducer
const count = handleActions({
  [INCREASE]: (state, action) => ({number: state.number + 1}),
  [DECREASE]: (state, action) => ({number: state.number - 1}),
}, initialState)

export default count;








