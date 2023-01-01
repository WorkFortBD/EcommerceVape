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
     loading: true,
     data: [],
   };
   dispatch({ type: Types.GET_PRODUCT_LIST_MAIN, payload: response });

   response.data = await getProductsData(args);
   response.loading = false;

   dispatch({ type: Types.GET_PRODUCT_LIST_MAIN, payload: response });
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
export const getProductsData = async (args) => {
 try {
   let url = `get-items?p=1`;

   if (args["type"]) {
     url += `&type=${args["type"]}`;
   }

   if (args["category"]) {
     url += `&category=${args["category"]}`;
   }

   if (typeof args["limit"] !== "undefined") {
     url += `&paginate_no=${args["limit"]}`;
   }

   const res = await Axios.get(url);

   return res.data.data.data;
 } catch (error) {
   //
 }
};