import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductModalDetails } from "../../store/product/action";
import { CartButton } from "../carts/CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetailImages from "./ProductDetailImages";
import { formatCurrency } from "../../utils/currency";
import { Progress } from "flowbite-react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IRootReducer } from "../../interfaces/reducers";
import ProductSpinner from "../master/spinner/ProductSpinner";

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
        className={`${
          isOpen ? "" : "hidden"
        } fixed inset-0 z-10 h-90 max-h-auto mt-10`}
      >
        <div className="flex items-center justify-center min-h-screen mt-12 px-8 pb-32 text-center sm:mb-12 sm:block sm:p-0 modal">
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
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
            <div className="flex mt-6 flex-col md:flex-row mx-2 flex-wrap">
              <div className="basis-2/4 p-2">
                {productsLoading == true ? (
                  <ProductSpinner />
                ) : (
                  <ProductDetailImages productImage={product.images} />
                )}
              </div>

              <div className="basis-2/4 border shadow-md rounded-3xl mt-5 p-6">
                {productsLoading==true?
                <ProductSpinner/>:
                <div className="text-center">
                  <h1 className="text-3xl">{product.name}</h1>
                  <p className="text-primary mt-3 text-2xl">30</p>
                  <p className="text-gray-500 text-xs mt-2">
                    مجموعة السفر قطن + ملقط + مقص صغير
                  </p>
                  <h3 className="mt-2 text-gray-500">
                    <strong>Brand:</strong>{" "}
                    <span>{product.brand && product.brand.name}</span>
                  </h3>
                  <p className="mt-2 text-base border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4">
                    <strong>Price: </strong>
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
                    <br />
                    Add{" "}
                    <span className="text-primary">
                      {formatCurrency(54)}
                    </span>{" "}
                    to cart and get free shipping!
                    <Progress progress={45} />
                  </p>
                  {product.current_stock !== 0 ? (
                    <h3>
                      <span className="inline-block mt-4">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ width: 14 }}
                          // className="text-primary"
                          color="green"
                        />
                      </span>
                      <span> In Stock</span>
                    </h3>
                  ) : (
                    <h3>
                      <span className="inline-block mt-4">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ width: 14 }}
                          // className="text-primary"
                          color="red"
                        />
                      </span>
                      <span> Out of Stock</span>
                    </h3>
                  )}
                </div>
              }
                <div className="text-center mt-6">
                  <CartButton product={product} />
                </div>
                <span></span>
                <div className="text-center mt-5">
                  <p className="mb-5">
                    <h3 className="mt-3">
                      <b>SKU:</b> {product.sku_manual}
                      <span className="ml-5">
                        <b>Category: </b>{" "}
                        {product.category != null
                          ? product.category.name
                          : null}
                      </span>
                    </h3>
                  </p>
                  <a
                    href={`/products/${product.sku}`}
                    className="transition-all bg-primary p-2 scale-90 w-32 px-4 ml-2 rounded-md text-white"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
