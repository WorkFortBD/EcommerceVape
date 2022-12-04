import { ICartReducer } from "./carts";
import { ILayoutReducer } from "./layout";
import { IProductReducer } from "./products";
import { ISliderReducer } from "./slider";

export interface IRootReducer {
    products: IProductReducer;
    carts: ICartReducer,
    layout: ILayoutReducer,
    slider: ISliderReducer,
}

export interface IAction {
    type: string;

    payload: any;
}