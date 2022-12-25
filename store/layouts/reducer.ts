
import { ILayoutReducer } from "../../interfaces/layout";
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState: ILayoutReducer = {
    categories: [],
    category: {
        name: '',
        banner: '',
        parent_id:0,
        short_code:'',
        image:'',
    },
    categoryLoading:false
};


const LayoutReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case Types.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.data,
                categoryLoading: action.payload.loading
            };

        default:
            return state;
    }
};
export default LayoutReducer;
