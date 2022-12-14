import { IAuthReducer } from "../../interfaces/auth";
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState: IAuthReducer = {
    authToken: '',
    userData: {email:'',password:'',remember:false},
    status: false,
    message: "",
    isLoading: false,
};

const AuthReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Types.POST_LOGIN_DATA:
      if (action.payload.status) {
        localStorage.setItem("userData", JSON.stringify(action.payload.data));
        localStorage.setItem("access_token", action.payload.tokenData);
      }
      console.log('action.payload',action.payload);
      return {
        ...state,
        authToken: action.payload.tokenData,
        message: action.payload.message,
        status: action.payload.status,
        userData: action.payload.data,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};
export default AuthReducer;
