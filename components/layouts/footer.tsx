import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import WhatsAppButton, { onClickWhatsAppButton } from "../whatsapp-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getWebsiteInfoAction,
  subscribeNewsletter,
} from "../../store/global/actioin";
import { IRootReducer } from "../../interfaces/reducers";
import Spinner from "../master/spinner/Spinner";

export default function Footer(): ReactElement {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUrl = `${window.location.origin}${router.asPath}`;
  const { websiteInfo, isLoading } = useSelector((state) => state.global);
  console.log("isLoading", isLoading);
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(getWebsiteInfoAction());
  }, []);

  const onSubmit = () => {
    dispatch(subscribeNewsletter(email));
  };
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
                <div>
                  <Link href="">
                    <img src="images/logos/logo.png" alt="" className="w-36" />
                  </Link>
                  <p className="text-gray-400 text-lg mt-3">
                    Got Questions ? Call us 24/7
                  </p>
                  <p className="text-gray-400 text-lg mt-3">
                    <a href="tel:+9660558449919">+966 0558449919</a>
                  </p>
                  <div className="mt-2">
                    <a
                      rel="nofollow"
                      href={websiteInfo?.facebook_link}
                      target="_blank"
                      className="mr-2 text-white"
                    >
                      <FontAwesomeIcon icon={faFacebook} width={30} />
                    </a>
                    <a
                      rel="nofollow"
                      href={websiteInfo?.linkedin_link}
                      target="_blank"
                      className="mr-2 text-white"
                    >
                      <FontAwesomeIcon icon={faLinkedin} width={30} />
                    </a>
                    <a
                      rel="nofollow"
                      href={websiteInfo?.twitter_link}
                      target="_blank"
                      className="mr-2 text-white"
                    >
                      <FontAwesomeIcon icon={faTwitter} width={30} />
                    </a>
                    <a
                      rel="nofollow"
                      href={websiteInfo?.youtube_link}
                      target="_blank"
                      className="mr-2 text-white"
                    >
                      <FontAwesomeIcon icon={faEnvelope} width={30} />
                    </a>
                    <a
                      rel="nofollow"
                      href={websiteInfo?.instagram_link}
                      target="_blank"
                      className="mr-2 text-white"
                    >
                      <FontAwesomeIcon icon={faInstagramSquare} width={30} />
                    </a>
                  </div>
                  <div className="flex mt-4 flex-col md:flex-row">
                    <input
                      className="border border-red-300 rounded-lg focus:outline-none focus:border-primary"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      // onKeyDown={(e) => onKeyDownHandler(e.key)}
                      placeholder="Subscribe for newsletter"
                    />
                    {isLoading == true ? (
                      <button
                        onClick={onSubmit}
                        className="ml-2 px-2 bg-primary text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
                      >
                        <Spinner />
                        Subscribing...
                      </button>
                    ) : (
                      <button
                        onClick={onSubmit}
                        className="ml-2 px-5 bg-primary text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
                      >
                        Subscribe
                      </button>
                    )}
                  </div>
                </div>
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
                {/* <li className="mt-3">
                  <Link href="/">Saudi Vape Shop Blog</Link>
                </li> */}
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
                  <Link href="/p/[pageBySlug]" as="/p/contact">
                    Contact Us
                  </Link>
                </li>

                <li className="mt-3">
                  <Link href="mailto:contactvapeshopsa@gmail.com">
                    Email Us
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="/"
                    onClick={() => onClickWhatsAppButton(currentUrl)}
                  >
                    Message Us
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="/"
                    onClick={() => onClickWhatsAppButton(currentUrl)}
                  >
                    Message Us Vai Whatsapp
                  </Link>
                </li>
              </div>
            </div>
            <div className="mt-16 text-gray-400 text-center  text-xs">
              © 2023 Saudi Vape Shop
            </div>

            <div className="mt-7 flex justify-center items-center">
              <Link href="">
                <img
                  src="images/common/footer-brand.png"
                  alt=""
                  className="w-15"
                />
              </Link>
              <Link href="">
                <img
                  src="images/common/vat-icon.png"
                  alt=""
                  className="w-10 ml-12"
                />
              </Link>
            </div>
          </div>
        </div>

        <WhatsAppButton />
      </footer>
    </div>
  );
}
