import { IAuthReducer } from "../../interfaces/auth";d
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState: IAuthReducer = {
    authLoading: false,
    loginData: {
        name: '',
        password: '',
    }
};


const AuthReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case Types.CHANGE_ITEM_INPUT:
            return {
                ...state,
                loginData: action.payload.data,
                authLoading: action.payload.loading
            };

        default:
            return state;
    }
};
export default AuthReducer;
