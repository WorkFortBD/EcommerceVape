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
 export const getProductListAction = (args = {}) =>async (dispatch) => {
   let response = {
     loading: false,
     data: [],
   };

   // console.log(`args`, args);

   // console.log(`url`, url);

   response.loading = true;
   dispatch({ type: Types.GET_CATEGORIES, payload: response });

   let url = `${process.env.NEXT_PUBLIC_API_URL}frontend-categories`;

   const res = await Axios.get(url);
   console.log('responseData',response.data);
   response.loading = false;

   dispatch({ type: Types.GET_CATEGORIES, payload: response });
 };