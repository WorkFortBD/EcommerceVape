import { IProductReducer } from "../../interfaces/products";
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState: IProductReducer = {
    products: [],
    productsLoading: false,
    isOpen:false,
    productModalDetails:{},

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
        case Types.GET_MODAL_DATA:
            console.log('action.payload.data', action.payload.data)
            return {
                ...state,
                productModalDetails: action.payload.data,
                productsLoading: action.payload.loading,
                // paginate: action.payload.paginate
            };
        case Types.OPEN_MODAL:
            console.log('action.payload', action.payload)
            return {
                ...state,
                isOpen: action.payload.isOpen,
            };
            

        default:
            return state;
    }
};
export default ProductReducer;
