import Axios from "axios";
import { ILogin } from "../../interfaces/auth";
import * as Types from "./type";



/**
 * changeinput function
 */

 export const changeItemInput = (name:ILogin, password:ILogin, e = null, itemInput = null) => (dispatch) => {
  let data={
    name:name,
    value:password
  }

  dispatch({ type: Types.CHANGE_ITEM_INPUT, payload: data });
 }

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