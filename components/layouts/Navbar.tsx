import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header>
      <nav className="top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-center items-center border-b p-5">
            <div className="basis-1/6">
              <a href="">
                <img src="/images/DSLogo.svg" alt="Dukhan" className="w-40" />
              </a>
            </div>
            <div className="basis-3/6">
              <div className="">
                <ul className="uppercase text-sm list-none flex justify-center items-center">
                  <li className="inline-block mx-1 sm:mx-2 md:mx-4">
                    <a href="" className="inline">
                      Home
                    </a>
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
                  className="text-3xl text-gray-500"
                />
                {/* <i className="fa-regular fa-user text-3xl text-gray-500"></i> */}
              </a>
              <a href="" className="mx-3 sm:mx-4 md:mx-6">
                <i className="fa-solid fa-magnifying-glass text-3xl text-gray-500"></i>
              </a>
              <a href="" className="mx-3 sm:mx-4 md:mx-6">
                <i className="fa-regular fa-heart text-3xl text-gray-500"></i>
              </a>
              <a href="" className="mx-3 sm:mx-4 md:mx-6">
                <i className="fa-solid fa-basket-shopping text-3xl text-gray-500"></i>
              </a>
              <a href="" className="mr-1">
                <i className="fa-thin fa-o bg-primary text-white pl-1.5 text-sm rounded-full h-5 w-5"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
