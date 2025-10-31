import { combineReducers } from "redux";
import count from "./count";
import font from "./font";
import jobs from "./jobs";

const rootReducer = combineReducers({
  count,
  font,
  jobs
})

export default rootReducer;