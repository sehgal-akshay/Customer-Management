import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import dataReducers from "./dataReducers";
const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  data: dataReducers
});

export default rootReducer;
