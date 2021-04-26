// import { createStore } from 'redux';
// import reducer from '../reducer'

// export const store = createStore(reducer);

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducer from "../reducer/firebaseReducer";
import reducer from "../reducer/index";

export const store = createStore(reducer, applyMiddleware(thunk));
