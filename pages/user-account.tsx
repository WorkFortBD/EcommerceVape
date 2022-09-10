import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"User Account"}>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg p-5">
          <form className="bg-white shadow-lg rounded px-5 pt-3 pb-8 mb-4">
            <div className="flex justify-between items-center border-b-2 py-2">
              <h3 className="text-xl font-bold">Sing In</h3>
              <Link href="/create-account">
                <p className="text-white px-2 py-1 rounded-md cursor-pointer bg-primary hover:bg-primary-light">
                  Create an Account
                </p>
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
            <div className="mb-6">
              <label
                htmlFor="number"
                className="block text-gray-700  font-bold mb-2"
              >
                Password
                <sub className="text-2xl text-red-500"> *</sub>
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>

            <button
              className="shadow-md w-full py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
            <div className="flex items-center justify-between mt-3">
              <div>
                <input className="mr-2" type="checkbox" />
                <span className="">Remember me</span>
              </div>
              <a
                className="inline-block align-baseline font-bold px-2 py-1 rounded-md text-primary hover:text-primary-light"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <p className="mt-5 text-center text-gray-400">OR</p>
            <button
              className="shadow-md w-full mt-4 py-2 uppercase bg-primary hover:bg-primary-light text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              LogIn with otp
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
