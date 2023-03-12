import Link from "next/link";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <div className="footer-section">
      <footer className="mt-20">
        <div className="bg-neutral-500 py-9">
          <p className="text-xs text-center text-white">
            WARNING: This site sells products that may contain nicotine.
            Nicotine is an addictive chemical
          </p>
        </div>

        <div className="bg-black px-5 py-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center">
              <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Link href="">
                  <img
                    src="images/logos/logo.png"
                    alt=""
                    className="w-36"
                  />
                </Link>
                <div className="flex flex-auto mt-16 text-gray-400">
                  <Link href="" className="mx-2 sm:mx-3 md:mx-4">
                    <i className="fa-brands fa-tiktok"></i>
                  </Link>
                  <Link href="" className="mx-2 sm:mx-3 md:mx-4">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="" className="mx-3 sm:mx-4 md:mx-6">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="" className="mx-3 sm:mx-4 md:mx-6">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </div>
              </div>
              <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Link href="">
                  <img
                    src="images/common/payments.svg"
                    alt=""
                    className="w-36 mt-4 py-2"
                  />
                </Link>
              </div>
              <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-gray-400 list-none">
                <li className="mt-3">
                  <Link href="/">Saudi Vape Shop Blog</Link>
                </li>
                <li className="mt-3">
                  <Link href="/terms-and-condition">Terms and Conditions</Link>
                </li>
                <li className="mt-3">
                  <Link href="/shipping">Shipping and Handing</Link>
                </li>
                <li className="mt-3">
                  <Link href="/return-policy">Return Policy</Link>
                </li>
                <li className="mt-3">
                  <Link href="/warranty">Guarantee and Warranty</Link>
                </li>
              </div>
              <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-gray-400 list-none">
                <li className="mt-3">
                  <Link href="/p/contact">Contact Us</Link>
                </li>

                <li className="mt-3">
                  <Link href="/p/help-center">Email Us</Link>
                </li>
                <li className="mt-3">
                  <Link href="/">Message Us</Link>
                </li>
                <li className="mt-3">
                  <Link href="/">Message Us Vai Whatsapp</Link>
                </li>
              </div>
            </div>
            <div className="mt-16 text-gray-400 text-center  text-xs">
              © 2023 Saudi Vape Shop
            </div>

            <div className="mt-7 flex justify-center items-center">
              <Link href="">
                <img src="images/common/footer-brand.png" alt="" className="w-15" />
              </Link>
              <Link href="">
                <img src="images/common/vat-icon.png" alt="" className="w-10 ml-12" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
