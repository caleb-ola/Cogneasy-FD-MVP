import { createStore, applyMiddleware } from "redux";
import Reducers from "./reducers";
import PromiseMiddleware from "redux-promise";

import thunk from "redux-thunk";

const Store = () =>
  createStore(Reducers, applyMiddleware(thunk, PromiseMiddleware));

export default Store;
