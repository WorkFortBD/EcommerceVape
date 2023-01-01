import Axios from "axios";
import * as Types from "./type";

/**
 * Get All Product List action
 *
 * @since 1.0.0
 *
 * @param array|object args different filtering argument processed
 *
 * @return void Dispatch `GET_PRODUCT_LIST_MAIN`
 */
 export const getCategoriesAction = (args = {}) =>async (dispatch) => {
   let response = {
     loading: false,
     data: [],
   };

   dispatch({ type: Types.GET_CATEGORIES, payload: response });

   let url = `frontend-categories`;

   const res = await Axios.get(url);
   response.data=res.data.data;
   response.loading = false;

   dispatch({ type: Types.GET_CATEGORIES, payload: response });
 };