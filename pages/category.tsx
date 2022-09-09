import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layouts/Layout";

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
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;
