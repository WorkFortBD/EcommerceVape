import Axios from "axios";
import * as Types from "./type";



export const getUserDataAction = () => async (dispatch) => {
  let data      = {
    userData    : null,
    access_token: 'access_token',
    redirectTo  : null,
    status:false
  };
  const userDataFound = localStorage.getItem('userData');
  console.log('userDataFound', userDataFound)
  if(userDataFound) {
    data.userData = JSON.parse(userDataFound);
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
    return;
  }
  try {
    const res = await Axios.get(`auth/getUserProfile`);
    console.log('User Response', res)
    data.userData = res.data.data;
    localStorage.setItem('user-info', JSON.stringify(res.data.data));
    dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  } catch (error) {
    // dispatch({ type: Types.GET_USER_STORAGE_DATA, payload: data });
  }
}