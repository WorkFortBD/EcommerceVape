/**
 * External dependencies.
 */
import React, { useEffect } from "react";
import Link from "next/link";

/**
 * Internal dependencies.
 */
import ProductList from "../products/ProductList";
import { Tabs } from "flowbite-react";
import { useSelector, useDispatch } from 'react-redux';
import { IRootReducer } from "../../interfaces/reducers";
import { getProductListAction } from "../../store/product/action";

export default function HomeProductFilter() {
  const { products } = useSelector((state: IRootReducer) => state.products);
  const dispatch                = useDispatch();
  // const { type, limit, page, category = "", isSliding } = props;
  // const { topRatedProducts } = useSelector((state: IRootReducer) => state.products);
  useEffect(() => {
    const args = {
      'type' : null,
      'limit': 20,
      'page' : 1,
      category: null
  };
    // New arrival products.
    dispatch(getProductListAction(args));
  }, []);

  const loadTopRatedProducts = () => {

  }

  return (
    <section className="product-section">
      <div className="container mx-auto">
        <div className="mt-12 p-2 uppercase mx-4">
          <Tabs.Group aria-label="Full width tabs" style="underline">
            <Tabs.Item title={<span className="text-primary px-2 md:px-5">New Arrivals</span>}>
              <ProductList products={products} />
            </Tabs.Item>
            <Tabs.Item title={<span className="text-primary px-2 md:px-5" onClick={loadTopRatedProducts}>Top Rated</span>}>
              <ProductList products={products} />
            </Tabs.Item>
            <Tabs.Item title={<span className="text-primary px-2 md:px-5">On Sale</span>}>
              <ProductList products={products} />
            </Tabs.Item>
          </Tabs.Group>

          {
            products.map((product, index) => (
              <div key={index}>
                <h2>{product.name}</h2>
              </div>
            ))
          }
        </div>

        <div className="mt-3">
          <div className="text-center mt-4">
            <button className="transition uppercase border p-3 px-6 hover:bg-primary hover:text-white hover:px-8">Load More Products</button>
          </div>
        </div>
      </div>
    </section>
  );
}
