import { ICartReducer } from "./carts";
import { ICategoryReducer } from "./category";
import { IProductReducer } from "./products";

export interface IRootReducer {
    products: IProductReducer;
    carts: ICartReducer,
    category: ICategoryReducer,
}

export interface IAction {
    type: string;

    payload: any;
}