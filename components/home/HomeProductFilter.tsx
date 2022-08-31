/**
 * External dependencies.
 */
import React from "react";
import Link from "next/link";

/**
 * Internal dependencies.
 */
import ProductList from "../products/ProductList";
import { Tabs } from "flowbite-react";

export default function HomeProductFilter() {
  return (
    <section className="product-section">
      <div className="container mx-auto">
        <div className="mt-12 p-2 uppercase mx-4">
          <Tabs.Group aria-label="Full width tabs" style="underline">
            <Tabs.Item title={<span className="text-primary px-2 md:px-5">New Arrivals</span>}>
              <ProductList count={12} />
            </Tabs.Item>
            <Tabs.Item title={<span className="text-primary px-2 md:px-5">Top Rated</span>}>
              <ProductList count={5} />
            </Tabs.Item>
            <Tabs.Item title={<span className="text-primary px-2 md:px-5">On Sale</span>}>
              <ProductList count={8} />
            </Tabs.Item>
          </Tabs.Group>
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
