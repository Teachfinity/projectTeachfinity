import { combineReducers } from "redux";
import authReduer from "./auth/authreducer";


const rootReducer = (asyncReducers) =>
  combineReducers({
    auth: authReduer,
    
    ...asyncReducers
  });

export default rootReducer;