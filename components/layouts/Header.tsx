import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <nav className="top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-center items-center border-b p-5">
            <div className="basis-1/6">
              <Link href="/">
                <img src="/images/DSLogo.svg" alt="Dukhan" className="w-40" />
              </Link>
            </div>
            <div className="basis-3/6">
              <div className="/">
                <ul className="uppercase text-sm list-none flex justify-center items-center">
                  <li className="inline-block mx-1 sm:mx-2 md:mx-4">
                    <Link href="/" className="inline">
                      Home
                    </Link>
                  </li>

                  <li className="inline-block mx-1 sm:mx-2 md:mx-3">
                    <a href="">Shope</a>
                  </li>

                  <li className="inline-block mx-1 sm:mx-2 md:mx-3">
                    <a href="" className="">
                      Dukhanpakages
                    </a>
                  </li>

                  <li className="inline-block mx-1 sm:mx-2 md:mx-3.5">
                    <a href="" className="">
                      Just In
                    </a>
                  </li>

                  <li className="inline-block mx-1 sm:mx-2 md:mx-3">
                    <a href="" className="">
                      Sale
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-auto">
              <a href="" className="mx-3 sm:mx-4 md:mx-6">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-500"
                  style={{ width: 22 }}
                />
              </a>
              <a href="" className="mx-3 sm:mx-4 md:mx-6">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-500"
                  style={{ width: 22 }}
                />
              </a>
              <Link href="/wishlist" className="">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-gray-500 mx-3 sm:mx-4 md:mx-6 cursor-pointer"
                  style={{ width: 22 }}
                />
              </Link>

              <Link href="/cart">
                <span className="mx-3 sm:mx-4 md:mx-6 relative cursor-pointer">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-gray-500"
                    style={{ width: 22 }}
                  />
                  <span className="bg-primary text-white pl-1.5 text-sm rounded-full h-5 w-5 absolute -top-3 -right-2">
                    0
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
