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
    paginate:{},
    flashDealList: [],
    isModalOpen: false,
    isDetailLoading: false,
};


const ProductReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case Types.GET_PRODUCT_LIST_MAIN:
            return {
                ...state,
                products: action.payload.data,
                productsLoading: action.payload.loading,
                paginate: action.payload.paginate
            };
        case Types.GET_FLASH_DEAL_DATA:
            return {
                ...state,
                flashDealList: action.payload.data,
                productsLoading: action.payload.loading,
                paginate: action.payload.paginate
            };

        default:
            return state;
    }
};
export default ProductReducer;
