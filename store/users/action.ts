import Axios from "axios";
import * as Types from "./type";



export const getUserDataAction = () => async (dispatch) => {
  let data = {
    userData: null,
    access_token: 'access_token',
    redirectTo: null,
    status: false
  };
  const userDataFound = localStorage.getItem('userData');
  if (userDataFound) {
    data.userData = JSON.parse(userDataFound);
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
    return;
  }
  try {
    const res = await Axios.get(`auth/getUserProfile`);
    data.userData = res.data.data;
    localStorage.setItem('user-info', JSON.stringify(res.data.data));
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  } catch (error) {
    // dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  }
}

export const getUserAddressAction = (user_id:number) => async (dispatch) => {
  console.log('user_id', user_id)
  let data = {
    data: null,
    isLoading: true
  };
  dispatch({ type: Types.GET_USER_ADDRESS_DATA, payload: data });
  try {
    const res = await Axios.get(`address?user_id=${user_id}`);
    console.log('res', res)
    data.data = res.data;
    data.isLoading = res.data;
    dispatch({ type: Types.GET_USER_ADDRESS_DATA, payload: data });
  } catch (error) {
    // dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  }
}