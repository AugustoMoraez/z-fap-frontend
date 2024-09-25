import { combineReducers } from "redux";
import { userReducer } from "./user/Reducer";

export const rootReducer = combineReducers({
    user:userReducer
});