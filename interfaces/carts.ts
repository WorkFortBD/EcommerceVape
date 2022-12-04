import { IProduct } from "./products";

export interface ICart extends IProduct {
    /**
     * Cart qty.
     */
    quantity: string;
}

export interface ICartReducer {
    carts: Array<IProduct>,
    totalQuantity: number,
    totalPrice: number,
    checkedAllCarts: boolean,
}
