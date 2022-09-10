import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Create Account"}>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg p-5">
          <form className="bg-white shadow-lg rounded px-5 pt-3 pb-8 mb-4">
            <div className="flex justify-center items-center cursor-pointer py-2">
              <Link href="/">
                <img
                  src="/images/logos/logo.svg"
                  className="mr-3 h-12 md:h-16"
                  alt=""
                />
              </Link>
            </div>

            <div className="mt-3">
              <label
                htmlFor="number"
                className="block text-gray-700  font-bold mb-2"
              >
                Email / Mobile Number
                <sub className="text-2xl text-red-500"> *</sub>
              </label>
              <input
                className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>

            <button
              className="shadow-md w-full mt-3 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset Password
            </button>
            <Link href="/user-account">
              <p className="cursor-pointer text-center text-primary hover:text-primary-dark mt-2">
                Back to login
              </p>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
