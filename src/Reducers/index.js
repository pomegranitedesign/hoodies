import { combineReducers } from "redux";

import phoneReducer from "./phoneReducer";
import userReducer from "./userReducer";

export default combineReducers({ phoneReducer, userReducer });
