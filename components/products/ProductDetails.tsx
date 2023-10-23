import React, { useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { Accordion } from "flowbite-react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import ProductDetailImages from "./ProductDetailImages";
import { formatCurrency } from "../../utils/currency";
import { IProduct } from "../../interfaces/products";
import { CartButton } from "../carts/CartButton";
import { onClickWhatsAppButton } from "../whatsapp-button";
import { updateCartQtyAction } from "../../store/cart/action";
import { toast } from 'react-toastify';
import { Form } from "react-bootstrap";

type Props = {
  product: IProduct;
};

export default function ProductDetails({ product }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUrl = `${window.location.origin}${router.asPath}`;
  const attributes = product.item_attributes_by_value[0]?.values.attribute_values_data;
  const [clickedId, setClickedId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const toggleClick = (attribute:object) => {
      localStorage.setItem('attribute', JSON.stringify(attribute));
  };
  // const attributeSelect = (value, code, id) => {
  //   return (
  //     <span className="bg-gray-500 text-white px-2 py-1 rounded-lg cursor-pointer">
  //       {value + " " + code}
  //     </span>
  //   );
  // }

  const updateQuantity = (quantity: number) => {
    if (quantity >= product.current_stock) {
      toast.error('Product Out Stock');
    } else {
      setQuantity(quantity);
    }

  }
  return (
    <section className="product-deatails-section">
      <div className="container mx-auto mt-2 p-5">
        <div className="flex justify-between">
          <div className="p-2 text-base inline-block">
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/">Home &nbsp; / &nbsp;</Link>
            </p>
            <p className="text-gray-500 hover:text-gray-700 inline">
              <Link href="/products"> Shop &nbsp; / &nbsp;</Link>
            </p>
            <p className="text-gray-500 hover:text-gray-700 inline">
              {typeof product.category !== "undefined" &&
                product.category !== null && (
                  <Link href={`/products?category=${encodeURIComponent(product.category.slug)}&name=${encodeURIComponent(product.category.name)}&filter=paginate_no__40`}>
                    {product?.category.name}
                  </Link>
                )}
              &nbsp; / &nbsp;
            </p>

            <p className="text-gray-500 hover:text-gray-700 inline">
              {typeof product.sub_category !== "undefined" &&
                product.sub_category !== null && (
                  <Link href={`/products?category=${encodeURIComponent(product.sub_category.slug)}&name=${encodeURIComponent(product.sub_category.name)}&filter=paginate_no__40`}>
                    {product.sub_category.name}
                  </Link>
                )}
              &nbsp;
              {typeof product.sub_category2 !== "undefined" && product.sub_category2 !== null && <>/ &nbsp;</>}
            </p>

            <p className="text-gray-500 hover:text-gray-700 inline">
              {typeof product.sub_category2 !== "undefined" && product.sub_category2 !== null && (
                <Link href={`/products?category=${encodeURIComponent(product.sub_category2.slug)}&name=${encodeURIComponent(product.sub_category2.name)}&paginate_no__40`}>
                  {product.sub_category2.name}
                </Link>
              )}
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
              <p className="text-primary mt-3 text-2xl">
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
              </p>
              {/* <p className="text-gray-500 text-xs mt-2">
                مجموعة السفر قطن + ملقط + مقص صغير
              </p> */}
              <h3 className="mt-2 text-gray-500">
                <strong>Brand:</strong> <span>{product.brand && product.brand.name}</span>
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
                {/* <Progress progress={45} /> */}
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
            <div className="flex flex-col justify-center items-center">
              <div className="p-4">
                <>
                  <Form>
                      <Form.Control
                        className="block w-full h-12 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                        // defaultValue={checkOptionValue(filterParams, "sort by")}
                        as="select"
                        custom
                      >
                        {attributes &&
                          attributes.map((attribute: any, index: number) => (
                            <option value={attribute.id} className="pb-4"  onClick={()=>toggleClick(attribute)}>
                              {attribute.value}{" "}{attribute.code}
                            </option>
                          ))}
                      </Form.Control>
                  </Form>
                </>

              </div>
              <div>
                <div className="flex w-full items-center">
                  <div className="flex sm:mb-0">
                    <button
                      className="border px-2 py-1 hover:bg-primary hover:text-white"
                      disabled={quantity <= 1}
                      onClick={() => updateQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <span className="border px-2 py-1">{quantity}</span>
                    <button
                      className="border px-2 py-1 hover:bg-primary hover:text-white"
                      disabled={quantity >= product.current_stock}
                      onClick={() => updateQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <CartButton product={product} quantity={quantity} />
                </div>
              </div>


              <div className="mt-6">
                <button className="bg-primary rounded-md p-2 px-8 text-white" onClick={() => onClickWhatsAppButton(currentUrl)}>
                  Question? <FontAwesomeIcon icon={faPhone} style={{ width: 14 }} />
                </button>
              </div>
            </div>



            <span></span>
            <div className="text-center mt-5">
              {/* <h3>
                <span className="inline-block mt-4">
                  <FontAwesomeIcon icon={faCheck} style={{ width: 14 }} />
                </span>
                <span> Browse List</span>
              </h3> */}
              {/* <p>
                <h3 className="bg-red-50 p-2 rounded-md mt-3 text-gray-400">
                  <b>1 </b>People watching this product
                </h3>
              </p> */}
              <p>
                <h3 className="mt-3">
                  <b>SKU:</b> {product.sku_manual}
                  <br />
                  <span className="ml-5">
                    <b>Category: </b> {product.category != null ? product.category.name : null}
                  </span>
                </h3>
              </p>
              <h4 className="mt-3 text-gray-500">
                {/* Tags: 3000 puff, Award winning e-liquid, cool mint, Disposable,
                disposable pod system, E JUICE, evo disposable pod system, ICE,
                mazaj, mint, pomegranate, Raspberry, Sweet, titan, Xtra */}
              </h4>
              <h4 className="my-2">Share</h4>
              <a rel="nofollow" href={`https://www.facebook.com/sharer/sharer.php?t=${product.name}&u=${currentUrl}`} target="_blank" className="mr-2">
                <FontAwesomeIcon icon={faFacebook} width={30} />
              </a>
              <a rel="nofollow" href={`https://www.linkedin.com/sharing/share-offsite?url=${currentUrl}`} target="_blank" className="mr-2">
                <FontAwesomeIcon icon={faLinkedin} width={30} />
              </a>
              <a rel="nofollow" href={`https://twitter.com/intent/tweet?text=${product.name}&url=${currentUrl}`} target="_blank" className="mr-2">
                <FontAwesomeIcon icon={faTwitter} width={30} />
              </a>
              <a rel="nofollow" href={`mailto:?body=${currentUrl}&subject=${product.name}`} target="_blank" className="mr-2">
                <FontAwesomeIcon icon={faEnvelope} width={30} />
              </a>
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
    </section >
  );
}
