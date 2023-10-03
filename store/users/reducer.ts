import { IAuthReducer } from "../../interfaces/auth";
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState = {
  userData    : null,
  userAddress    : [],
  access_token: null,
  isLogOut    : false,
  isLoggedIn  : false,
  isLoading:false
};

const UserDataReducer = (state = initialState, action:IAction) => {
  switch (action.type) {
    case Types.GET_USER_STORAGE_DATA:
      return {
        ...state,
        userData    : action.payload.userData,
        access_token: action.payload.access_token,
        redirectTo  : action.payload.redirectTo,
      };

      case Types.GET_USER_ADDRESS_DATA:
        console.log('action.payload', action.payload)
      return {
        ...state,
        userAddress: action.payload.data,
        isLoading: action.payload.isLoading
      };
    case Types.LOGOUT_USER:
      return {
        ...state,
        isLogOut: action.payload,
      };

    default:
      return state
  }
};

export default UserDataReducer;
