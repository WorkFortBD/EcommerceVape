import * as types from "./type";
// import { IWebsiteData } from '../../../interfaces/index';

export interface IGlobalReducer {
  isModalActive: boolean;
  floatingCartVisible: boolean;
  backdrop: boolean;
  isMobile: boolean;
  isSignedIn: boolean;
  welcomePopup: boolean;
  websiteInfoLoading: boolean;
  isLoading:boolean;
  isShowing:boolean;
  //   websiteInfo: IWebsiteData | null
}

const initialState = {
  isModalActive: false,
  floatingCartVisible: false,
  backdrop: false,
  isMobile: false,
  isSignedIn: false,
  welcomePopup: false,
  websiteInfoLoading: true,
  websiteInfo: null,
  isloading:false,
  isShowing:false
};

const GlobalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: payload,
      };

    case types.SET_WEBSITE_INFO_LOADING:
      return {
        ...state,
        websiteInfoLoading: payload,
      };

    case types.SET_WEBSITE_INFO:
      return {
        ...state,
        websiteInfo: payload,
      };

    case types.POST_SUBSCRIBE_NEWSLETTER:
      return {
        ...state,
        isLoading: payload.loading,
      };

      case types.SHOW_WHATSAPP_BUTTON:
      return {
        ...state,
        isShowing: payload,
      };

    default:
      return state;
  }
};

export default GlobalReducer;
