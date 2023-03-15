import { IAuthReducer } from "../../interfaces/auth";
import { IAction } from "../../interfaces/reducers";
import * as Types from "./type";

const initialState: IAuthReducer = {
    authToken: '',
    userData: {email:'',password:'',remember:false},
    status: false,
    message: "",
    isLoading: false,
    isSignedIn:false,
    isSignedOut:false,
    socialLogin:false
};
const AuthReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Types.POST_LOGIN_DATA:
      if (action.payload.status) {
        localStorage.setItem("userData", JSON.stringify(action.payload.data));
        localStorage.setItem("access_token", action.payload.tokenData);
        // localStorage.setItem("isLoggedIn", action.payload.status);
      }
      return {
        ...state,
        authToken: action.payload.tokenData,
        message: action.payload.message,
        status: action.payload.status,
        userData: action.payload.data,
        isLoading: action.payload.isLoading,
      };

      case Types.SOCIAL_LOGIN:
        console.log('action.payload social', action.payload)
        if (action.payload.status) {
          localStorage.setItem("userData", JSON.stringify(action.payload.data));
          localStorage.setItem("access_token", action.payload.tokenData);
          // localStorage.setItem("isLoggedIn", action.payload.status);
        }
        return {
          ...state,
          authToken: action.payload.tokenData,
          message: action.payload.message,
          status: action.payload.status,
          userData: action.payload.data,
          isLoading: action.payload.isLoading,
          socialLogin: action.payload.socialLogin,
        };
      case Types.IS_SIGNED_IN:
        return{
          ...state,
          isSignedIn:action.payload.isSignedIn,
          isLoading:action.payload.isLoading
        }
        case Types.IS_SIGNED_OUT:
          return {
            ...state,
            isSignedOut: action.payload,
          };

    default:
      return state;
  }
};
export default AuthReducer;
