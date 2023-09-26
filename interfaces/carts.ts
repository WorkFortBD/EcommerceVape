import { IProduct } from "./products";

export interface ICart {
    quantity: number;
    additional: object;
    approxDeliveryDate: string;
    approxDeliveryTime: number;
    isChecked: boolean;
    isOffer: boolean;
    offerPrice: number;
    price: number;
    productID: number;
    productImage: string;
    productName: string;
    sellerID: number;
    sku: string;
    attribute:ICartAttribute;
}

export interface ICartReducer {
    carts: Array<IProduct>,
    totalQuantity: number,
    totalPrice: number,
    checkedAllCarts: boolean,
}

export interface ICartAttribute {
    value: number,
    code: string,
    id: number
}
