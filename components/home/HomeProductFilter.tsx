/**
 * External dependencies.
 */
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Internal dependencies.
 */
import ProductList from "../products/ProductList";
import { Tabs } from "flowbite-react";
import { IRootReducer } from "../../interfaces/reducers";
import { getProductListAction } from "../../store/product/action";
import ShimmerEffect from "../master/skeleton/ShimmerEffect";

export default function HomeProductFilter() {
  const { products, productsLoading, paginate } = useSelector(
    (state: IRootReducer) => state.products
  );
  const [tabValue, setTabValue] = useState("latest");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("tabValue", tabValue);
    const args = {
      type: tabValue,
      limit: 20,
      page: 1,
      category: null,
    };
    // New arrival products.
    dispatch(getProductListAction(args));
  }, [tabValue]);

  const handleLoadMoreProduct = (limit) => {
    //get next page url from productreducer
    const args = {
      type: null,
      limit: limit,
      category: null,
    };
    dispatch(getProductListAction(args));
    setShowLoadMore(false);
  };

  const loadTopRatedProducts = (value) => {
    setTabValue(value);
  };

  return (
    <section className="product-section">
      <div className="container mx-auto">
        <div className="mt-12 p-2 uppercase mx-4">
          <Tabs.Group aria-label="Full width tabs" style="underline">
            <Tabs.Item
              title={
                <span
                  className="text-primary px-2 md:px-5"
                  onClick={() => loadTopRatedProducts("latest")}
                >
                  New Arrivals
                </span>
              }
            >
              {productsLoading == true ? (
                <ShimmerEffect />
              ) : (
                <ProductList products={products} />
              )}
            </Tabs.Item>
            <Tabs.Item
              title={
                <span
                  className="text-primary px-2 md:px-5"
                  onClick={() => loadTopRatedProducts("best-sold")}
                >
                  Top Rated
                </span>
              }
            >
              {productsLoading == true ? (
                <ShimmerEffect />
              ) : (
                <ProductList products={products} />
              )}
            </Tabs.Item>
            <Tabs.Item
              title={
                <span
                  className="text-primary px-2 md:px-5"
                  onClick={() => loadTopRatedProducts("most-offer-product")}
                >
                  On Sale
                </span>
              }
            >
              {productsLoading == true ? (
                <ShimmerEffect />
              ) : (
                <ProductList products={products} />
              )}
            </Tabs.Item>
          </Tabs.Group>

          {/* {
            products.map((product, index) => (
              <div key={index}>
                <h2>{product.name}</h2>
              </div>
            ))
          } */}
        </div>
        {showLoadMore ? (
          <div className="mt-3">
            <div className="text-center mt-4">
              <button
                onClick={() => handleLoadMoreProduct(40)}
                className="transition uppercase border p-3 px-6 hover:bg-primary hover:text-white hover:px-8"
              >
                Load More Products
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
}
