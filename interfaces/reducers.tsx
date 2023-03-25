import { IAuthReducer } from "./auth";
import { ICartReducer } from "./carts";
import { ILayoutReducer } from "./layout";
import { IProductReducer } from "./products";
import { ISliderReducer } from "./slider";
import { IProfileAccountSetting } from "./userProfile";

export interface IRootReducer {
    products: IProductReducer;
    carts: ICartReducer,
    layout: ILayoutReducer,
    slider: ISliderReducer,
    auth: IAuthReducer,
    userProfile: IProfileAccountSetting,
}

export interface IAction {
    type: string;
    payload: any;
}