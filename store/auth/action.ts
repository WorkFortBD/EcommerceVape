import Axios from "axios";
import { ILogin } from "../../interfaces/auth";
import * as Types from "./type";
import { toast } from "react-toastify";
import { getUserDataAction } from "../users/action";


/**
 * changeinput function
 */

export const postLoginData = (values: ILogin) => async (dispatch) => {
  let loginResponse = {
    status: false,
    message: "",
    isLoading: true,
    tokenData: "",
    data: null,
  };
  dispatch({ type: Types.POST_LOGIN_DATA, payload: loginResponse });

  try {
    let postData = {
      email: values.email,
      password: values.password,
      remember: false,
    };
    await Axios.post(`auth/login`, postData, {})
      .then((res) => {
        console.log('res', res)
        const { data, message, status } = res.data;
        const { user, access_token } = data;

        loginResponse.data = user;
        loginResponse.tokenData = access_token;
        loginResponse.status = status;
        if(loginResponse.status == true){
          toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          window.location.assign('/');
        }
       
      })
      .catch((err) => {
        // const { response } = err.response;
        // const { request, ...errorObject } = response;
        loginResponse.message = err.response.data.message;
        toast.error(loginResponse.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  } catch (error) {
    loginResponse.message = "Something went wrong, Please try again !";
  }

  loginResponse.isLoading = false;
  dispatch({ type: Types.POST_LOGIN_DATA, payload: loginResponse });

  // return axios.post(LOGIN_URL, { email, password });
};


/**
 * Social Login
 */

 export const socialLogin = (token) => async (dispatch) => {
  let loginResponse = {
    status: false,
    message: "",
    isLoading: true,
    tokenData: "",
    data: null,
    socialLogin:false
  };
  dispatch({ type: Types.SOCIAL_LOGIN, payload: loginResponse });
  let postData= JSON.stringify({ token })
  try {
    await Axios.post(`auth/login/google`, postData, {})
      .then((res) => {
        console.log('googleLoginResponse', res)
        const { data, message, status,access_token } = res.data;
        // const { user, access_token } = data;
        loginResponse.data = data;
        loginResponse.tokenData = access_token;
        loginResponse.status = status;
        loginResponse.socialLogin = true;
        if(loginResponse.status == true){
          toast.success(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          window.location.assign('/');
        }
       
      })
      .catch((err) => {
        // const { response } = err.response;
        // const { request, ...errorObject } = response;
        loginResponse.message = err.response.data.message;
        toast.error(loginResponse.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  } catch (error) {
    loginResponse.message = "Something went wrong, Please try again !";
  }

  loginResponse.isLoading = false;
  dispatch({ type: Types.SOCIAL_LOGIN, payload: loginResponse });

  // return axios.post(LOGIN_URL, { email, password });
};

/**
 * Get Products Data
 *
 * @since 1.0.0
 *
 * @param object args filtered criteria
 *
 * @return array products array
 */
// export const postLoginData = async (args) => {
//  try {

//  } catch (error) {
//    //
//  }
// };

export const isSignedIn = (isSignedIn, userData) => async (dispatch) => {
  // const session = await getSession();
  let data = {
    isSignedIn: false,
    isLoading: false,
  };
  const userDataFound = localStorage.getItem("user-info");

  if (!userDataFound || !userData) {
    dispatch(getUserDataAction());
  }

  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    data.isLoading = true;
    data.isSignedIn = true;
    dispatch({ type: Types.IS_SIGNED_IN, payload: data });
  } else {
    data.isLoading = false;
    data.isSignedIn = false;
    dispatch({ type: Types.IS_SIGNED_IN, payload: data });
  }
};

export const isSignedOut = () => async (dispatch) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user-info");
  localStorage.removeItem("carts");
  localStorage.removeItem("userData");
  dispatch({ type: Types.IS_SIGNED_OUT, payload: true });
};

// export const getUserDataAction = () => async (dispatch) => {
//   let data      = {
//     userData    : null,
//     access_token: 'access_token',
//     redirectTo  : null
//   };
//   const userDataFound = localStorage.getItem('user-info');

//   if(userDataFound) {
//     data.userData = JSON.parse(userDataFound);
//     dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
//     return;
//   }

//   try {
//     const res = await Axios.get('auth/getUserProfile');
//     data.userData = res.data.data;
//     localStorage.setItem('user-info', JSON.stringify(res.data.data));
//     dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
//   } catch (error) {
//     // dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
//   }
// }

export const customerRegister = async (registerInput) => {
  try {
    const res = await Axios.post(`auth/register-next`, registerInput);
    return res;
  } catch (error) {
    return Promise.reject(false);
  }
};
