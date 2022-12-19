import Axios from "axios";
import { ILogin } from "../../interfaces/auth";
import * as Types from "./type";
import { toast } from "react-toastify";



/**
 * changeinput function
 */

 export const postLoginData = (values:ILogin) => async (dispatch) => {
  console.log('ActionLogin',values);
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
    await Axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, postData, {})
      .then((res) => {
        console.log('LoginResponse', res);
        const { data, message, status } = res.data;
        const { user, access_token} = data;
        // localStorage.setItem(
        //   "role-permissions",
        //   JSON.stringify(role_permissions)
        // );
        // localStorage.setItem("menus", JSON.stringify(menus));

        loginResponse.data = user;
        loginResponse.tokenData = access_token;
        loginResponse.message = message;
        loginResponse.status = status;
        toast("success", message);
      })
      .catch((err) => {
        const { response } = err;
        const { request, ...errorObject } = response;
        loginResponse.message = errorObject.data.message;
        toast("error", loginResponse.message);
      });
  } catch (error) {
    loginResponse.message = "Something went wrong, Please try again !";
  }

  loginResponse.isLoading = false;
  dispatch({ type: Types.POST_LOGIN_DATA, payload: loginResponse });

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
  const userDataFound = localStorage.getItem('user-info');

  if (!userDataFound || !userData) {
    await getProductsData(args);
  }


  const accessToken = localStorage.getItem('access-token');

  if (accessToken) {
    dispatch({ type: Types.IS_SIGNED_IN, payload: true })
  } else {
    dispatch({ type: Types.IS_SIGNED_IN, payload: false })
  }
};

export const getUserDataAction = () => async (dispatch) => {
  let data      = {
    userData    : null,
    access_token: 'access_token',
    redirectTo  : null
  };
  const userDataFound = localStorage.getItem('user-info');
  
  if(userDataFound) {
    data.userData = JSON.parse(userDataFound);
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
    return;
  }
  
  try {
    const res = await Axios.get('auth/getUserProfile');
    data.userData = res.data.data;
    localStorage.setItem('user-info', JSON.stringify(res.data.data));
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  } catch (error) {
    // dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  }
}

export const customerRegister = async (registerInput) => {
  try {
    const res = await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}auth/register-next`, registerInput);
    return res;
  } catch (error) {
      return Promise.reject(false)
  }
};