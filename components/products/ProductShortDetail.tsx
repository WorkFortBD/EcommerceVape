/**
 * External dependencies.
 */
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

/**
 * Internal dependencies.
 */
import { IProductShortDetail } from "../../interfaces/products";
import { IRootReducer } from "../../interfaces/reducers";
import { getProductModalDetails } from "../../store/product/action";
import { formatCurrency } from "../../utils/currency";
import { CartButton } from "../carts/CartButton";
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductShortDetail({ product }: IProductShortDetail): ReactElement {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: IRootReducer) => state.products);

  const openProductDetailModal = () => {
    dispatch(getProductModalDetails(product.sku, true));
  }

  const gotoProductDetailPage = () => {
    router.push(`/products/${product.sku}`);
  }

  return (
    <div className="relative group mb-6 border border-gray-100 shadow-sm rounded-lg mr-3 transition hover:shadow-md group-hover:opacity-75 max-w-[145px] lg:max-w-[260px]">
      {isOpen && <ProductDetailsModal />}

      <div className="">
        <div className="overflow-hidden relative group">
          <img
            src={
              `${process.env.NEXT_PUBLIC_URL}images/products/` +
              product.featured_image
            }
            onClick={gotoProductDetailPage}
            alt=""
            className="transition-all scale-100 group-hover:scale-110 cursor-pointer rounded rounded-b-none w-full h-50"
          />
          <div
            className="hidden cursor-pointer group-hover:block group-hover:absolute bg-black text-white top-0 right-0 p-4"
            onClick={openProductDetailModal}
          >
            Quick View &nbsp;
            <FontAwesomeIcon icon={faSearch} style={{ width: 22 }} />
          </div>
          {/* Quick Details Button - Responsive */}
          <div className="md:hidden absolute bg-black text-white text-white top-0 right-0 p-4">
            <button onClick={openProductDetailModal}>Quick Details</button>
          </div>
        </div>
        <div className="mt-1 p-1 text-center">
          <p
            onClick={gotoProductDetailPage}
            className="cursor-pointer text-gray-800 hover:text-gray-600 overflow-hidden h-12 text-sm md:text-base font-bold"
          >
            {product.name}
          </p>
        </div>
      </div>
      <div className="text-center mt-3 font-bold">
        {!product.is_offer_enable ||
          product.offer_selling_price == 0 ||
          !(product.offer_selling_price < product.default_selling_price) ? (
          <span className="block text-primary-light">
            {formatCurrency(product.default_selling_price)}
          </span>
        ) : (
          <span>
            <span className="block text-primary-light">
              {formatCurrency(product.offer_selling_price)}
            </span>

            <del className="block text-slate-300">
              {formatCurrency(product.default_selling_price)}
            </del>
          </span>
        )}
        <p className="my-3">
          <CartButton product={product} />
        </p>
      </div>
    </div>
  );
}
