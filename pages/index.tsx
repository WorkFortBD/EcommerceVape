/**
 * External dependencies.
 */
import type { NextPage } from "next";

/**
 * Internal dependenncies.
 */
import HomeProductFilter from "../components/home/HomeProductFilter";
import Layout from "../components/layouts/Layout";
import Slider from "../components/slider/Slider";
import content from '../content.json';

const Home: NextPage = () => {
  return (
    <Layout title={content.name}>
      <Slider />

      <section className="store-section">
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
      </section>

      {/* Filter */}
      <HomeProductFilter />
    </Layout>
  );
};



export default Home;
