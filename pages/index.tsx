/**
 * External dependencies.
 */
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { CategoryComponent } from "../components/category/CategoryComponent";

/**
 * Internal dependenncies.
 */
import HomeProductFilter from "../components/home/HomeProductFilter";
import Layout from "../components/layouts/Layout";
import Slider from "../components/slider/Slider";
import content from '../content.json';
import ProductsCarousel from "../components/carousel/ProductsCarousel";
import FlashDeals from "../components/products/FlashDeals";
import HomeStaticBanner from "../components/home/HomeStaticBanner";
import HomeCategoryProduct from "../components/home/HomeCategoryProduct";

const Home: NextPage = () => {

  useEffect(() => {
  }, []);
  return (
    <Layout title={content.name}>
      <Slider />
      <Head>
        <link rel="canonical" href="https://vapeshopsa.com" />
      </Head>
      {/* <section className="store-section">
        <div className="container mx-auto mt-10">
          <div className="flex justify-center flex-wrap">
            <div className=" mt-3 ml-4">
              <img src="/images/homepage/packages.jpg" alt="" />
            </div>
            <div className=" mt-3  ml-4">
              <img src="/images/homepage/batteries.jpg" alt="Battery" />
            </div>
            <div className=" ml-4">
              <p>
                <img
                  src="/images/categories/disposable.jpg"
                  alt="Disposable Pods"
                  className="mt-2"
                />
              </p>
              <p className="mt-5">
                <img src="/images/categories/cotton.jpg" alt="Cotton" />
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <CategoryComponent />
      <FlashDeals />
      <HomeStaticBanner pageSlug="homepage-banner" />
      <HomeCategoryProduct categorySlug='vape' />
      <HomeCategoryProduct categorySlug='e-juice' />

      {/* <div className="container mx-auto">
        <ProductsCarousel />
      </div> */}

      {/* Filter */}
      <HomeProductFilter />

    </Layout>
  );
};



export default Home;
