import React, { useCallback, useEffect, useState } from "react";
import { debounce } from 'lodash';
import { useDispatch, useSelector } from "react-redux";

import { searchProductAction } from "../../store/product/action";
import { IRootReducer } from "../../interfaces/reducers";
import ProductSpinner from "../master/spinner/ProductSpinner";
import ProductShortDetail from "./ProductShortDetail";
import { IProduct } from "../../interfaces/products";

export default function ProductDetailsModal() {
  const dispatch = useDispatch();
  const {
    productSearchData: products,
    isSearchModalOpen,
    productsLoading,
  } = useSelector((state: IRootReducer) => state.products);
  const closeProductDetailModal = () => {
    dispatch(searchProductAction("product?.sku", false));
  };

  const [searchText, setSearchText] = useState('');

  const debouncedDispatch = useCallback(
    debounce(() => {
      dispatch(searchProductAction(searchText, true));
    }, 500),
    [searchText]
  );

  useEffect(() => {
    debouncedDispatch();
    return debouncedDispatch.cancel;
  }, [searchText]);

  return (
    <>
      <div
        className={`${isSearchModalOpen ? "" : "hidden"
          } fixed inset-0 overflow-y-scroll z-10 bg-white max-h-auto mt-20`}
      >
        <div className="flex items-center justify-center min-h-screen mt-4 md:mt-12 px-8 pb-32 text-center sm:mb-12 sm:block sm:p-0 modal">
          <div className="inline-block align-bottom bg-white rounded-lg text-left sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
            <button
              onClick={closeProductDetailModal}
              className="absolute top-0 right-0 p-2 hover:bg-red-200 rounded-full"
            >
              <svg
                className="h-6 w-6 text-red-700"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col md:flex-row mx-2 md:mx-0 flex-wrap p-5 md:p-10 mb-5 md:mb-10">
              <input
                className="w-full md:w-3/4 border border-red-300 rounded-lg focus:outline-none focus:border-primary p-3"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
              />
              <button className="mt-2 md:mt-0 ml-0 md:ml-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-indigo-600 focus:outline-none">
                Search
              </button>
            </div>

            {productsLoading == true ? <ProductSpinner />
              :
              (products.length > 0 ? (<div className="flex flex-row justify-center items-center flex-wrap">
                {products.map((product: IProduct, index: number) => (
                  <ProductShortDetail product={product} key={index} />
                ))}
              </div>) :
                (<h3 className="text-lg ml-12 text-red-500 font-semibold mb-2 justify-content-center">
                  Give some search criteria to get products...
                </h3>)
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}
