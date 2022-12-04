import { IProductReducer } from "../../interfaces/products";
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState: IProductReducer = {
    products: [],
    productsLoading: false,

    productSlug: '',
    product: {
        name: '',
        price: 0,
        image:''
    },
    isModalOpen: false,
    isDetailLoading: false
};


const ProductReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case Types.GET_PRODUCT_LIST_MAIN:
            console.log('action.payload',action.payload);
            return {
                ...state,
                products: action.payload.data,
                productsLoading: action.payload.loading
            };

        default:
            return state;
    }
};
export default ProductReducer;
