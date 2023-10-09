import Axios from "axios";
import * as Types from "./type";

 export const getCategoriesAction = (args = {}) =>async (dispatch) => {
   let response = {
     loading: false,
     data: [],
   };

   dispatch({ type: Types.GET_CATEGORIES, payload: response });

   let url = `frontend-categories?limit=3`;

   const res = await Axios.get(url);
   response.data=res.data.data;
   response.loading = false;

   dispatch({ type: Types.GET_CATEGORIES, payload: response });
 };

 export const getCategoriesHomepageAction = (args = {}) =>async (dispatch) => {
  let response = {
    loading: false,
    data: [],
  };

  dispatch({ type: Types.GET_CATEGORIES_HOMEPAGE, payload: response });

  let url = `frontend-categories?type=homepage&limit=3`;

  const res = await Axios.get(url);
  response.data=res.data.data;
  response.loading = false;

  dispatch({ type: Types.GET_CATEGORIES_HOMEPAGE, payload: response });
};