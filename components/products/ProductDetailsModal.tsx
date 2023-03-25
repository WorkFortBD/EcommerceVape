
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductModalDetails, modalStatus } from "../../store/product/action";
import { CartButton } from "../carts/CartButton";
import ProductDetails from "./ProductDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetailImages from "./ProductDetailImages";
import { formatCurrency } from "../../utils/currency";
import { Progress } from "flowbite-react";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";


export default function ProductDetailsModal(slug) {
  const dispatch = useDispatch();
  const {productModalDetails,isOpen } = useSelector(state => state.products);
  console.log('productModalDetails', productModalDetails)
  let product=productModalDetails;
   useEffect(() => {
    dispatch(getProductModalDetails(slug.slug));
  }, []);
  const closeModal =()=>{
    dispatch(modalStatus(false))
  }
    // let open=isOpen.isOpen;
  return (
          <div
          className={`${
            isOpen ? '' : 'hidden'
          } fixed z-10 inset-0 overflow-y-auto max-h-full`}
        >
           {/* <div
          className= "fixed z-10 inset-0 overflow-y-auto max-h-full"
        > */}
          <div className="flex items-center justify-center min-h-screen pt-8 px-8 pb-32 text-center sm:block sm:p-0 modal">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
  
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div className="flex mt-6 flex-col md:flex-row mx-2 flex-wrap">
          <div className="basis-2/4 p-2">
            {/* <ProductDetailImages productImage={product.images} /> */}
          </div>
          <div className="basis-2/4 border shadow-md rounded-3xl mt-5 p-6">
            <div className="text-center">
              <h1 className="text-3xl">{product.name}</h1>
              <p className="text-primary mt-3 text-2xl">30</p>
              <p className="text-gray-500 text-xs mt-2">
                مجموعة السفر قطن + ملقط + مقص صغير
              </p>
              <h3 className="mt-2 text-gray-500">
                <strong>Brand:</strong> <span>{product.brand && product.brand.name }</span>
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
                Add <span className="text-primary">
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
            <div className="flex justify-between mt-4 p-4 border">
              <a href="" className="text-gray-400 text-xs">
                or 4 interest-free payments of
                <b>111.25 SAR.</b>
                <u>Learn more</u>
              </a>
              <a href="" className="bg-green-300 rounded">
                tabby
              </a>
            </div>
            <div className="text-center mt-6">
              {/* <p className="basis-1/2 font-size">
                <button
                  className="border px-2 py-1 hover:bg-primary hover:text-white"
                  disabled={cart.quantity <= 1 ? true : false}
                  onClick={() => updateQuantity(cart.quantity - 1)}
                >
                  -
                </button>
                <span className="border px-2 py-1">{cart.quantity}</span>
                <button
                  className="border px-2 py-1 hover:bg-primary hover:text-white"
                  onClick={() => updateQuantity(cart.quantity + 1)}
                >
                  +
                </button>
              </p> */}
              <CartButton product={product} />
            </div>
            <div className="text-center">
              <button className="bg-primary mt-6 rounded-md p-2 px-8 text-white">
                Question?
                <span className="inline-block ml-2">
                  <FontAwesomeIcon icon={faPhone} style={{ width: 14 }} />
                </span>
              </button>
            </div>
            <span></span>
            <div className="text-center mt-5">
              <h3>
                <span className="inline-block mt-4">
                  <FontAwesomeIcon icon={faCheck} style={{ width: 14 }} />
                </span>
                <span> Browse List</span>
              </h3>
              <p>
                <h3 className="bg-red-50 p-2 rounded-md mt-3 text-gray-400">
                  <b>1 </b>People watching this product
                </h3>
              </p>
              <p>
                <h3 className="mt-3">
                  <b>SKU:</b> {product.sku_manual}
                  <span className="ml-5">
                    <b>Category: </b> {product.category !=null? product.category.name:null}
                  </span>
                </h3>
              </p>
              <h4 className="mt-3 text-gray-500">
                Tags: 3000 puff, Award winning e-liquid, cool mint, Disposable,
                disposable pod system, E JUICE, evo disposable pod system, ICE,
                mazaj, mint, pomegranate, Raspberry, Sweet, titan, Xtra
              </h4>
              {/* <b>Share:</b> */}
            </div>
          </div>
        </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:w-auto">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    // onClick={toggleModal}
                  >
                    Close
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
  );
}
