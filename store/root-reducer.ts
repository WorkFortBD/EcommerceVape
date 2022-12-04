import { combineReducers } from "redux";
import CartReducer from "./cart/reducer";
import LayoutReducer from "./layouts/reducer";
import ProductReducer from "./product/reducer";
import SliderReducer from "./slider/reducer";

const reducers = {
    products: ProductReducer,
    carts: CartReducer,
    layout:LayoutReducer,
    slider:SliderReducer,
};

export default combineReducers(reducers);
