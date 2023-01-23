import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import CartReducer from "./cart/reducer";
import CategoryReducer from "./category/reducer";
import GlobalReducer from "./global/reducer";
import LayoutReducer from "./layouts/reducer";
import OrderReducer from "./order/reducer";
import ProductReducer from "./product/reducer";
import ProfileAccountSettingReducer from "./profileaccountsetting/reducer";
import SliderReducer from "./slider/reducer";
import UserDataReducer from "./users/reducer";

const reducers = {
    products            : ProductReducer,
    carts               : CartReducer,
    layout              :LayoutReducer,
    slider              :SliderReducer,
    auth                :AuthReducer,
    category            : CategoryReducer,
    global              : GlobalReducer,
    user                :UserDataReducer,
    userProfile         : ProfileAccountSettingReducer,
    order               : OrderReducer
};

export default combineReducers(reducers);
