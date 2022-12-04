import { ICartReducer } from "./carts";
import { ILayoutReducer } from "./layout";
import { IProductReducer } from "./products";

export interface IRootReducer {
    products: IProductReducer;
    carts: ICartReducer,
    layout: ILayoutReducer,
}

export interface IAction {
    type: string;

    payload: any;
}