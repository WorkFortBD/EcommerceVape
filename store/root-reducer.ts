import { combineReducers } from "redux";
import CartReducer from "./cart/reducer";
import LayoutReducer from "./layouts/reducer";
import ProductReducer from "./product/reducer";

const reducers = {
    products: ProductReducer,
    carts: CartReducer,
    layout:LayoutReducer
};

export default combineReducers(reducers);
