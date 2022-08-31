import Link from "next/link";
import React from "react";

export default function DashboardLayout(props: any) {
  return (
    <section className="wishlist-section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/5 border-r-2">
            <h2 className="p-2 ml-4 uppercase text-xl text-gray-900">
              {props.title}
            </h2>

            <div className="mt-5">
              <aside className="" aria-label="Sidebar">
                <div className="py-4 px-3 list-none bg-gray-50 rounded dark:bg-gray-800">
                  <ul className="space-y-2">
                    <li className="cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
                      <Link href="my-account">
                        <span className="ml-3">Dashboard</span>
                      </Link>
                    </li>
                    <li className="cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
                      <Link href="my-order">
                        <span className="ml-3">Order</span>
                      </Link>
                    </li>
                    <li className="cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
                      <Link href="address">
                        <span className="ml-3">Address</span>
                      </Link>
                    </li>
                    <li className="cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
                      <Link href="accountdeatials">
                        <span className="flex-1 ml-3">Account Deatails</span>
                      </Link>
                    </li>

                    <li className="cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
                      <Link href="/">
                        <span className="flex-1 ml-3">Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="mt-7 hidden md:block text-center">
              <h2 className="uppercase text-xl text-gray-900">HelpFul Links</h2>
              <li className="mt-3 list-none text-gray-400 hover:text-gray-600">
                <Link href="">Saudi Vape Shop Blog</Link>
              </li>
              <li className="mt-3 list-none text-gray-400 hover:text-gray-600">
                <Link href="">Terms and Conditions</Link>
              </li>
              <li className="mt-3 list-none text-gray-400 hover:text-gray-600">
                <Link href="">Shipping and Handing</Link>
              </li>
              <li className="mt-3 list-none text-gray-400 hover:text-gray-600">
                <Link href="">Return Policy</Link>
              </li>
              <li className="mt-3 list-none text-gray-400 hover:text-gray-600">
                <Link href="">Guarantee and Warranty</Link>
              </li>
            </div>
          </div>
          <div className="basis-4/5">
            {/* Dynamic component inject */}
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
}
