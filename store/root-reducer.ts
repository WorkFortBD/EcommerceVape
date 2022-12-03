import { combineReducers } from "redux";
import ProductReducer from "./product/reducer";

const reducers = {
    products: ProductReducer,
};

export default combineReducers(reducers);
