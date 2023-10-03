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
import BrandList from "../components/brands";

const Home: NextPage = () => {

  useEffect(() => {
  }, []);
  return (
    <>
      <Layout title={content.name}>
      <Head>
        <link rel="canonical" href="https://vapestoreksa.com" />
        <meta property="og:title" content={content.name} />
        <meta property="og:description" content={content.meta_description} />
        <meta property="og:image" content={content.logo} />
      </Head>
        <Slider />
        <CategoryComponent />
        <FlashDeals />
        <HomeStaticBanner pageSlug="homepage-banner" />
        <HomeCategoryProduct categorySlug='vape' />
        <HomeCategoryProduct categorySlug='e-juice' />
        <HomeCategoryProduct categorySlug='accessories' />
        <HomeProductFilter />
        <BrandList />

      </Layout>
    </>
  );
};



export default Home;
