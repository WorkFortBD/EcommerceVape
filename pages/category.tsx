import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import HomeComponent from "../components/home/HomeComponent";
import Layout from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Category"}>
      <section className="categoty-section">
        <div className="container mx-auto mt-12">
          <p className="text-gray-500">Regulated Mechanical Pods Systems</p>

          <div className="mt-6">
            <a href="" className="text-gray-500  hover:text-gray-700">
              Home /
            </a>
            <a href="" className="text-gray-500 ml-1  hover:text-gray-700">
              Shops /
            </a>
            <a href="" className="text-gray-500 ml-1  hover:text-gray-700">
              vape /
            </a>
            <a href=""> Mods</a>

            <p className="mt-3">
              Show : <a href="">18</a> /
              <a href="" className="text-gray-500 hover:text-gray-700 ml-1">
                36
              </a>
              /
              <a href="" className="text-gray-500 hover:text-gray-700 ml-1">
                100
              </a>
              <a href="" className="text-gray-700">
                <FontAwesomeIcon
                  icon={faFilter}
                  style={{ width: 16 }}
                  className="text-gray-500 inline ml-12"
                />{" "}
                Filters
              </a>
            </p>
          </div>

          <div className="flex justify-center flex-wrap mx-2 md:mx-4">
            <div className="mt-3 mr-12">
              <img src="/images/a.jpeg" alt="" className="rounded-lg w-60" />
              <div className="text-center text-2xl">Disposables</div>
            </div>

            <div className="mt-3 mr-12">
              <img src="/images/a.jpeg" alt="" className="rounded-lg w-60" />
              <div className="text-center text-2xl">Regulated</div>
            </div>
            <div className="mt-3 mr-12">
              <img src="/images/a.jpeg" alt="" className="rounded-lg w-60" />
              <div className="text-center text-2xl">Mechanical</div>
            </div>
            <div className="mt-3 mr-12">
              <img src="/images/a.jpeg" alt="" className="rounded-lg w-60" />
              <div className="text-center text-2xl uppercase">Pod Systems</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-14">
        <HomeComponent />
      </div>
    </Layout>
  );
};

export default Home;
