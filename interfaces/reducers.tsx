import { IProductReducer } from "./products";

export interface IRootReducer {
    products: IProductReducer;
}

export interface IAction {
    type: string;

    payload: any;
}