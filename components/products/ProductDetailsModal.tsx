import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "flowbite-react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { getProductModalDetails } from "../../store/product/action";
import { CartButton } from "../carts/CartButton";
import ProductDetailImages from "./ProductDetailImages";
import { formatCurrency } from "../../utils/currency";
import { IRootReducer } from "../../interfaces/reducers";
import ProductSpinner from "../master/spinner/ProductSpinner";
import Link from "next/link";

export default function ProductDetailsModal() {
  const dispatch = useDispatch();

  const {
    productModalDetails: product,
    isOpen,
    productsLoading,
  } = useSelector((state: IRootReducer) => state.products);

  const closeProductDetailModal = () => {
    dispatch(getProductModalDetails(product?.sku, false));
  };

  return (
    <>
      <div
        className={`${isOpen ? "" : "hidden"
          } fixed inset-0 z-10 h-full top-0 left-0 flex items-center justify-center overflow-y-auto bg-opacity-50 bg-black`}
      >
        <div className="bg-white rounded-lg max-w-full overflow-hidden shadow-lg text-center sm:max-w-3xl sm:w-full">
          <div className="p-4">
            <button
              onClick={closeProductDetailModal}
              className="absolute top-0 right-0 p-2 hover:bg-red-200 rounded-full"
            >
              <svg
                className="h-6 w-6 text-red-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {productsLoading ? (
            <ProductSpinner />
          ) : (
            <div className="flex flex-col md:flex-row flex-wrap p-4">
              <div className="w-full md:w-1/2 p-2">
                <ProductDetailImages productImage={product.images} />
                <div className="flex justify-center w-full items-center mt-10">
                  <p>
                    <Link
                      href={`/products/${product.sku}`}
                      className="transition-all bg-primary py-3 px-5 scale-90 hover:scale-100 rounded-md text-white"
                    >
                      View Details
                    </Link>
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 border shadow-md rounded-3xl my-5 p-6">
                <div className="text-center">
                  <h1 className="text-3xl">{product.name}</h1>
                  <p className="text-primary mt-3 text-2xl">
                    {product.is_offer_enable ? (
                      <>
                        <span className="text-primary line-through font-bold">
                          {formatCurrency(product.default_selling_price)}
                        </span>
                        &nbsp;
                        <span className="text-primary font-bold">
                          {formatCurrency(product.offer_selling_price)}
                        </span>
                      </>
                    ) : (
                      <span className="text-primary font-bold">
                        {formatCurrency(product.default_selling_price)}
                      </span>
                    )}
                  </p>
                  <h3 className="mt-2 text-gray-500 mt-3">
                    <strong>Brand:</strong> <span>{product.brand && product.brand.name}</span>
                  </h3>
                  {product.current_stock !== 0 ? (
                    <h3>
                      <span className="inline-block mt-4">
                        <FontAwesomeIcon icon={faCheck} style={{ width: 14 }} color="green" />
                      </span>
                      <span> In Stock</span>
                    </h3>
                  ) : (
                    <h3>
                      <span className="inline-block mt-4">
                        <FontAwesomeIcon icon={faCheck} style={{ width: 14 }} color="red" />
                      </span>
                      <span> Out of Stock</span>
                    </h3>
                  )}
                </div>

                <div className="text-center mt-6">
                  <CartButton product={product} />
                </div>
                <div className="text-center mt-5">
                  <p className="mb-5">
                    <h3 className="mt-3">
                      <b>SKU:</b> {product.sku_manual}
                      <br />
                      <span className="ml-5">
                        <b>Category: </b>{" "}
                        {product.category != null ? product.category.name : null}
                      </span>
                    </h3>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>

  );
}
