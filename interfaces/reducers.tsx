import { ICartReducer } from "./carts";
import { IProductReducer } from "./products";

export interface IRootReducer {
    products: IProductReducer;
    carts: ICartReducer,
}

export interface IAction {
    type: string;

    payload: any;
}