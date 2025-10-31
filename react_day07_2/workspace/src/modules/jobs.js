import { handleActions } from "redux-actions";

const initialState = {
  jobs: {
    developer : {
      name : "홍길동",
      skills : ["React.js", "JavaScript"]
    },
    planner : {
      name : "장보고",
      skills : ["Excel", "Figma"]
    }
  }
}

const jobs = handleActions({
  
}, initialState)

export default jobs;