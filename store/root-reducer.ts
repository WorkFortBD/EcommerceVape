import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import CartReducer from "./cart/reducer";
import LayoutReducer from "./layouts/reducer";
import ProductReducer from "./product/reducer";
import SliderReducer from "./slider/reducer";

const reducers = {
    products: ProductReducer,
    carts: CartReducer,
    layout:LayoutReducer,
    slider:SliderReducer,
    auth:AuthReducer,
};

export default combineReducers(reducers);
