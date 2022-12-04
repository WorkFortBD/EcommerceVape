import { combineReducers } from "redux";
import CartReducer from "./cart/reducer";
import ProductReducer from "./product/reducer";

const reducers = {
    products: ProductReducer,
    carts: CartReducer,
};

export default combineReducers(reducers);
