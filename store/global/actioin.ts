// import { getSession } from 'next-auth/client'
import * as types from "./type";
import axios from 'axios';
import Store from '../../store';
import { getUserDataAction } from "../users/action";
import { toast } from "react-toastify";

export const isSignedIn = (isSignedIn, userData) => async (dispatch) => {
  // const session = await getSession();
  const userDataFound = localStorage.getItem('user-info');

  if (!userDataFound || !userData) {
    dispatch(getUserDataAction());
  }


  const accessToken = localStorage.getItem('access-token');

  if (accessToken) {
    dispatch({ type: types.IS_SIGNED_IN, payload: true })
  } else {
    dispatch({ type: types.IS_SIGNED_IN, payload: false })
  }
};

// export const toggleFloatingCart = (status = null) => {
//   if (typeof status === "undefined" || status === null) {
//     return { type: types.TOGGLE_FLOATING_CART };
//   }

//   return {
//     type: types.TOGGLE_FLOATING_CART,
//     payload: status,
//   };
// };

// export const toggleModal = () => {
//   return {
//     type: types.TOGGLE_MODAL,
//   };
// };

// export const toggleBackdrop = () => {
//   return {
//     type: types.TOGGLE_BACKDROP,
//   };
// };

// export const checkIsMobileDevice = (isMobile) => {
//   return {
//     type: types.GET_DEVICE_INFO,
//     payload: isMobile,
//   };
// };

// export const setWelcomePopup = (isVisible) => {
//   return {
//     type: types.SET_WELCOME_POPUP,
//     payload: isVisible,
//   };
// };

/**
 * Get website column data.
 *
 * @param {string} columnName
 *
 * @returns string columnValue
 */
export const getWebsiteData = (column) => {
  // Get data from redux store
  const globalStore = Store.getState().global;
  if (typeof globalStore.websiteInfo === 'undefined' || globalStore.websiteInfoLoading || globalStore.websiteInfo === null) {
    return '';
  }

  const columnValue = globalStore.websiteInfo[column];
  if (typeof columnValue === 'undefined' || columnValue === null) {
    return '';
  }

  return columnValue;
}

export const getWebsiteInfoAction = () => (dispatch) => {
  dispatch({ type: types.SET_WEBSITE_INFO_LOADING, payload: true });

  axios.get('website/info')
    .then(res => {
      dispatch({ type: types.SET_WEBSITE_INFO_LOADING, payload: false });
      dispatch({ type: types.SET_WEBSITE_INFO, payload: res.data.data });
    }).catch(err => {
      dispatch({ type: types.SET_WEBSITE_INFO_LOADING, payload: false });
    });
}

export const subscribeNewsletter = (email) => async dispatch => {
  let response = {
      loading: true
  }

  const url = "subscriber/subscribe";
  const data = {
      email: email
  }
  
  try {
      dispatch({type: types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
      response.loading = false;
      const res = await axios.post(url, data);
      dispatch({type: types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
      toast.success('Subscribed Successfully',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  } catch (err) {
      const message = err.response.data.message;
      response.loading = false;
      dispatch({type: types.POST_SUBSCRIBE_NEWSLETTER, payload: response})
      toast.error(message,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  }
}


export const showWhatAppButton = (data:any) => (dispatch) => {
  let status =data;
  dispatch({ type: types.SHOW_WHATSAPP_BUTTON, payload: status });
}
