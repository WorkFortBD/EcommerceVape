import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Accordion, Progress } from "flowbite-react";
import ProductList from "./ProductList";
import ProductDetailImages from "./ProductDetailImages";
import { formatCurrency } from "../../utils/currency";
import { IProduct } from "../../interfaces/products";
import { CartButton } from "../carts/CartButton";
import DOMPurify from "dompurify";

type Props = {
  product: IProduct;
};

export default function ProductDetails({ product }: Props) {
  return (
    <section className="product-deatails-section">
      <div className="container mx-auto mt-2 p-5">
        <div className="flex justify-between">
          <div className="p-2 text-base inline-block">
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/">Home /</Link>
            </p>
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/"> Shop /</Link>
            </p>
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/"> Vape /</Link>
            </p>
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/"> Juices /</Link>
            </p>
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/"> Salt Nicotine</Link>
            </p>
          </div>
          {/* <div>
            <Link href="/">
              <FontAwesomeIcon icon={faTable} style={{ width: 22 }} />
            </Link>
          </div> */}
        </div>

        <div className="flex mt-6 flex-col md:flex-row mx-2 flex-wrap">
          <div className="basis-2/4 p-2">
            <ProductDetailImages productImage={product.images} />
          </div>
          <div className="basis-2/4 border shadow-md rounded-3xl mt-5 p-6">
            <div className="text-center">
              <h1 className="text-3xl">{product.name}</h1>
              <p className="text-primary mt-3 text-2xl">30</p>
              <p className="text-gray-500 text-xs mt-2">
                مجموعة السفر قطن + ملقط + مقص صغير
              </p>
              <h3 className="mt-2 text-gray-500">
                <strong>Brand:</strong> <span>{product.brand.name ??'No Brand'}</span>
              </h3>
              <p className="mt-2 text-base border-dashed border-2 border-slate-400 text-slate-500 py-5 px-4">
                <strong>Price: </strong>
                {product.is_offer_enable ? (
                  <>
                    <span className="text-primary line-through font-bold">
                      {formatCurrency(product.default_selling_price)}
                    </span>
                    &nbsp;
                    <span className="text-primary font-bold">
                      {formatCurrency(product.offer_selling_price)}
                    </span>
                  </>
                ) : (
                  <span className="text-primary font-bold">
                    {formatCurrency(product.default_selling_price)}
                  </span>
                )}
                <br />
                Add <span className="text-primary">
                  {formatCurrency(54)}
                </span>{" "}
                to cart and get free shipping!
                <Progress progress={45} />
              </p>
              {product.current_stock !== 0 ? (
                <h3>
                  <span className="inline-block mt-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ width: 14 }}
                      // className="text-primary"
                      color="green"
                    />
                  </span>
                  <span> In Stock</span>
                </h3>
              ) : (
                <h3>
                  <span className="inline-block mt-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ width: 14 }}
                      // className="text-primary"
                      color="red"
                    />
                  </span>
                  <span> Out of Stock</span>
                </h3>
              )}
            </div>
            <div className="flex justify-between mt-4 p-4 border">
              <a href="" className="text-gray-400 text-xs">
                or 4 interest-free payments of
                <b>111.25 SAR.</b>
                <u>Learn more</u>
              </a>
              <a href="" className="bg-green-300 rounded">
                tabby
              </a>
            </div>
            <div className="text-center mt-6">
              {/* <p className="basis-1/2 font-size">
                <button
                  className="border px-2 py-1 hover:bg-primary hover:text-white"
                  disabled={cart.quantity <= 1 ? true : false}
                  onClick={() => updateQuantity(cart.quantity - 1)}
                >
                  -
                </button>
                <span className="border px-2 py-1">{cart.quantity}</span>
                <button
                  className="border px-2 py-1 hover:bg-primary hover:text-white"
                  onClick={() => updateQuantity(cart.quantity + 1)}
                >
                  +
                </button>
              </p> */}
              <CartButton product={product} />
            </div>
            <div className="text-center">
              <button className="bg-primary mt-6 rounded-md p-2 px-8 text-white">
                Question?
                <span className="inline-block ml-2">
                  <FontAwesomeIcon icon={faPhone} style={{ width: 14 }} />
                </span>
              </button>
            </div>
            <span></span>
            <div className="text-center mt-5">
              <h3>
                <span className="inline-block mt-4">
                  <FontAwesomeIcon icon={faCheck} style={{ width: 14 }} />
                </span>
                <span> Browse List</span>
              </h3>
              <p>
                <h3 className="bg-red-50 p-2 rounded-md mt-3 text-gray-400">
                  <b>1 </b>People watching this product
                </h3>
              </p>
              <p>
                <h3 className="mt-3">
                  <b>SKU:</b> {product.sku_manual}
                  <span className="ml-5">
                    <b>Category: </b> {product.category.name}
                  </span>
                </h3>
              </p>
              <h4 className="mt-3 text-gray-500">
                Tags: 3000 puff, Award winning e-liquid, cool mint, Disposable,
                disposable pod system, E JUICE, evo disposable pod system, ICE,
                mazaj, mint, pomegranate, Raspberry, Sweet, titan, Xtra
              </h4>
              {/* <b>Share:</b> */}
            </div>
          </div>
        </div>

        <Accordion flush={true} alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              <h2 className="uppercase text-2xl text-center mt-5">
                Description
              </h2>
            </Accordion.Title>
            <Accordion.Content>
              <p className="">
                <img src="/images/wishlist/description.png" alt="" />
              </p>
              <div className="mt-8">
                {/* <h2 className="mt-6 text-3xl text-center uppercase">
                  Description
                </h2> */}
                <p
                  className="mt-3 text-center text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description),
                  }}
                >
                  {/* {sanitizeHtml(product.description)} */}
                </p>
                <div className="text-center mt-5">
                  <h2 className="text-3xl uppercase">What's Included</h2>
                  <ol className="mt-3">
                    <li className="text-gray-400">
                      1 x Titan 3000 puffs Vape Pen Disposable
                    </li>
                  </ol>
                </div>

                <div className="text-center mt-5">
                  <h2 className="uppercase text-3xl">Spaces & fetures</h2>
                  <ol className="mt-3 text-gray-400">
                    <li>E-liquid Capacity: 10ML</li>
                    <li className="mt-1">Battery Capacity: 600mAh</li>
                  </ol>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <h2 className="text-center text-2xl">Reviews</h2>
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex justify-center">
                <div>
                  <h2 className="uppercase">Reviews</h2>
                  <p className="mt-2 text-gray-500">
                    There are no reviews yet.
                  </p>
                </div>
                <div className="ml-6 text-gray-500">
                  <p>
                    Only logged in customers who have purchased this product may
                    leave a review.
                  </p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <h2 className="mt-5 text-center uppercase text-3xl">
          You May Also Like
        </h2>
        {/* <ProductList />
        <div className="mt-5">
          <h2 className="mt-8 text-center uppercase text-3xl">
            Related Product
          </h2>
          <ProductList />
        </div> */}
      </div>
    </section>
  );
}
