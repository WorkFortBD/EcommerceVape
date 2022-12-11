import { IAuthReducer } from "./auth";
import { ICartReducer } from "./carts";
import { ILayoutReducer } from "./layout";
import { IProductReducer } from "./products";
import { ISliderReducer } from "./slider";

export interface IRootReducer {
    products: IProductReducer;
    carts: ICartReducer,
    layout: ILayoutReducer,
    slider: ISliderReducer,
    auth: IAuthReducer,
}

export interface IAction {
    type: string;

    payload: any;
}