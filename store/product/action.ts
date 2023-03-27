import { Dispatch } from "@reduxjs/toolkit";
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
export const getProductListAction = (args = {}) => async (dispatch) => {
  let response = {
    loading: true,
    data: [],
    paginate: {}
  };
  dispatch({ type: Types.GET_PRODUCT_LIST_MAIN, payload: response });

  response.paginate = await getProductsData(args);
  response.loading = false;
  response.data = response.paginate.data;

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
    return res.data.data;
  } catch (error) {
    //
  }
};

export const getDealFlashListAction = () => (dispatch) => {
  const responseData = {
    data: [],
    status: true,
    isLoading: true,
  }
  dispatch({ type: Types.GET_FLASH_DEAL_DATA, payload: responseData });

  Axios.get(`get-items?type=deals-of-day&paginate_no=10`)
    .then(res => {
      responseData.data = res.data.data.data;
      responseData.isLoading = false;

      dispatch({ type: Types.GET_FLASH_DEAL_DATA, payload: responseData });
    })
    .catch(err => {
      console.log('deals of the day err => ', err);
    })
}

export const getProductModalDetails = (slug: string, isModalVisible: boolean) => (dispatch) => {
  const responseData = {
    data: [],
    status: true,
    isLoading: isModalVisible ? true : false,
    isOpen: isModalVisible
  }
  dispatch({ type: Types.GET_MODAL_DATA, payload: responseData });
  if (!isModalVisible) {
    return;
  }

  Axios.get(`get-item-detail/${slug}`)
    .then(res => {
      console.log('ProductModalResponse', res.data.data)
      responseData.data = res.data.data;
      responseData.isLoading = false;
      // responseData.isOpen = true;

      dispatch({ type: Types.GET_MODAL_DATA, payload: responseData });
    })
    .catch(err => {
      console.log('deals of the day err => ', err);
    })
};


// export const searchProductAction = (searchData:string,isModalVisible: boolean) => async (dispatch) => {
//   // const {search} = searchData;
//   const responseData = {
//     data:[],
//     status: true,
//     isLoading: isModalVisible ? true : false,
//     isOpen: isModalVisible
// }

//   const url = `get-items/search?search=${searchData}&type=''`;

//   if(!searchData) return;

//   try {
//     dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
//     // const res = await axios.get(url, {cancelToken: source.token});
//     Axios.get(`get-item-detail/${slug}`)
//     .then(res => {
//       console.log('ProductModalResponse', res.data.data)
//         responseData.data = res.data.data;
//         responseData.isLoading = false;
//         // responseData.isOpen = true;

//         dispatch({type: Types.GET_MODAL_DATA, payload: responseData});
//     })
//     dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });

//   } catch (error) {
//     if(axios.isCancel(error)) {
//       // console.log('from cancel token error handler')
//     } else {
//       response.loading = false;
//       dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: response });
//       // console.log('from search catch handler => ', error)
//     }
//   }
// };

export const searchProductAction = (search: string, isModalVisible: boolean) => (dispatch: Dispatch) => {
  const responseData = {
    data: [],
    status: true,
    isLoading: isModalVisible ? true : false,
    isSearchModalOpen: isModalVisible
  }
  dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: responseData });
  if (!isModalVisible) {
    return;
  }

  Axios.get(`get-items?search=${search}`)
    .then(res => {
      console.log('res.data.data', res.data.data.data);
      
      responseData.data = res.data.data.data;
      responseData.isLoading = false;
      dispatch({ type: Types.GET_SEARCHED_PRODUCT_LIST, payload: responseData });
    })
    .catch(err => {
      console.log('Search Error', err);
    })
};