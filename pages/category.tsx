import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Link from "next/link";
import HomeComponent from "../components/home/HomeComponent";
import Layout from "../components/layouts/Layout";
import ProductList from "../components/products/ProductList";
import { formatCurrency } from "../utils/currency";

const Home: NextPage = () => {
  return (
    <Layout title={"Category"}>
      <>
        <section className="category-section">
          <div className="container mx-auto mt-12">
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
              <>
                <p className="text-gray-500 md:ml-4">
                  Regulated Mechanical Pods Systems
                </p>

                <div className="mt-6 md:ml-4">
                  <Link href="/" className="text-gray-500  hover:text-gray-700">
                    Home /
                  </Link>
                  <Link
                    href=""
                    className="text-gray-500 ml-1  hover:text-gray-700"
                  >
                    Shops /
                  </Link>
                  <Link
                    href=""
                    className="text-gray-500 ml-1  hover:text-gray-700"
                  >
                    vape /
                  </Link>
                  <Link href=""> Mods</Link>

                  <p className="mt-3">
                    Show : <Link href="">18</Link> /
                    <Link
                      href=""
                      className="text-gray-500 hover:text-gray-700 ml-1"
                    >
                      36
                    </Link>
                    /
                    <Link
                      href=""
                      className="text-gray-500 hover:text-gray-700 ml-1"
                    >
                      100
                    </Link>
                    <Link href="" className="text-gray-700">
                      <>
                        <FontAwesomeIcon
                          icon={faFilter}
                          style={{ width: 16 }}
                          className="text-gray-500 inline ml-12"
                        />{" "}
                        Filters
                      </>
                    </Link>
                  </p>
                </div>
              </>
            </div>

            <div className="flex justify-center md:justify-start flex-wrap mx-2 md:mx-4">
              <div className="mt-6 flex group px-2 max-w-[400px]">
                <div className="mt-4 p-4 text-center">
                  <h3 className="text-gray-700">
                    VGOD Pod 4K BERRY BOMB ICE 4000 puffs
                  </h3>
                  <p className="text-primary-light mt-5">
                    {formatCurrency(800)}
                  </p>
                  <button className="cursor-pointer transition-all uppercase mx-3 mt-3 hover:bg-primary-light text-sm mb-3 py-2 px-4 bg-primary rounded-md text-white hover:px-8">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <img
                    src="/images/products/5.jpeg"
                    alt=""
                    className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded-l-full ml-6  w-full h-60"
                  />
                </div>
              </div>
              <div className="group mt-6 flex px-2 max-w-[400px]">
                <div className="">
                  <img
                    src="/images/products/5.jpeg"
                    alt=""
                    className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded-r-full ml-6  w-full h-60"
                  />
                </div>
                <div className="mt-4 p-4 text-center">
                  <h3 className="text-gray-700">
                    VGOD Pod 4K BERRY BOMB ICE 4000 puffs
                  </h3>
                  <p className="text-primary-light mt-5">
                    {formatCurrency(800)}
                  </p>
                  <button className="cursor-pointer transition-all uppercase mx-3 mt-3 hover:bg-primary-light text-sm mb-3 py-2 px-4 bg-primary rounded-md text-white hover:px-8">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-6 flex group px-2 max-w-[400px]">
                <div className="mt-4 p-4 text-center">
                  <h3 className="text-gray-700">
                    VGOD Pod 4K BERRY BOMB ICE 4000 puffs
                  </h3>
                  <p className="text-primary-light mt-5">
                    {formatCurrency(800)}
                  </p>
                  <button className="cursor-pointer transition-all uppercase mx-3 mt-3 hover:bg-primary-light text-sm mb-3 py-2 px-4 bg-primary rounded-md text-white hover:px-8">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <img
                    src="/images/products/5.jpeg"
                    alt=""
                    className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded-l-full ml-6  w-full h-60"
                  />
                </div>
              </div>
              <div className="group mt-6 flex px-2 max-w-[400px]">
                <div className="">
                  <img
                    src="/images/products/5.jpeg"
                    alt=""
                    className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded-r-full ml-6  w-full h-60"
                  />
                </div>
                <div className="mt-4 p-4 text-center">
                  <h3 className="text-gray-700">
                    VGOD Pod 4K BERRY BOMB ICE 4000 puffs
                  </h3>
                  <p className="text-primary-light mt-5">
                    {formatCurrency(800)}
                  </p>
                  <button className="cursor-pointer transition-all uppercase mx-3 mt-3 hover:bg-primary-light text-sm mb-3 py-2 px-4 bg-primary rounded-md text-white hover:px-8">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 ml-6 mb-5 text-center md:text-left">
              <div className="mb-6">
                <h2 className="text-primary text-2xl">Products</h2>
                <p>Get your necessary vapes in this category...</p>
              </div>
              <ProductList count={12} />
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;
