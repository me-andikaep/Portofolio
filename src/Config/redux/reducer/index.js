import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";

export default combineReducers({
    firebase: firebaseReducer,
});
