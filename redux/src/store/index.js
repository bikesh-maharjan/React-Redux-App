import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import footballReducer from "../reducers/footballReducer";

const store = createStore(footballReducer, applyMiddleware(thunk));

export default store;
