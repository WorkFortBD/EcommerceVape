import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProductAction } from "../../store/product/action";
import { CartButton } from "../carts/CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetailImages from "./ProductDetailImages";
import { formatCurrency } from "../../utils/currency";
import { Progress } from "flowbite-react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IRootReducer } from "../../interfaces/reducers";
import ProductSpinner from "../master/spinner/ProductSpinner";
import ProductShortDetail from "./ProductShortDetail";
import { IProduct } from "../../interfaces/products";

export default function ProductDetailsModal() {
  const dispatch = useDispatch();

  const {
    productSearchData: product,
    isSearchModalOpen,
    productsLoading,
  } = useSelector((state: IRootReducer) => state.products);
  console.log("product", product);
  const closeProductDetailModal = () => {
    dispatch(searchProductAction("product?.sku", false));
  };

  const searchProduct = (e) => {
    let search = e.target.value;
    dispatch(searchProductAction(search, true));
  };

  return (
    <>
      <div
        className={`${
          isSearchModalOpen ? "" : "hidden"
        } fixed inset-0 overflow-y-scroll z-10 bg-white max-h-auto mt-10`}
      >
        <div className="flex items-center justify-center min-h-screen mt-12 px-8 pb-32 text-center sm:mb-12 sm:block sm:p-0 modal">
          <div className="inline-block align-bottom bg-white rounded-lg text-left  sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
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
            <div className="flex mt-6 flex-col md:flex-row mx-2 flex-wrap p-10 mb-10 mt-0">
              <input
                className="w-3/4 border border-red-300 rounded-lg focus:outline-none focus:border-primary"
                type="text"
                onChange={(e) => searchProduct(e)}
                // onKeyDown={(e) => onKeyDownHandler(e.key)}
                placeholder="Search..."
              />
              <button className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none">
                Search
              </button>
            </div>
            {productsLoading==true?<ProductSpinner/>:(product.length>0?(<div className="flex flex-row justify-center items-center flex-wrap">
              {product.map((item: IProduct, index: number) => (
                <ProductShortDetail product={item} key={index} />
              ))}
            </div>):
            (<h3 className="text-lg ml-12 text-red-500 font-semibold mb-2 justify-content-center">The Is No Product Available</h3>)
            )
            
            }
            
          </div>
        </div>
      </div>
    </>
  );
}
