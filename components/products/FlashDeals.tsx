import React, { useEffect } from "react";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { getDealFlashListAction } from "../../store/product/action";
import ShimmerEffect from "../master/skeleton/ShimmerEffect";
import ProductsCarousel from "../carousel/ProductsCarousel";

const FlashDeals = () => {
    const dispatch = useDispatch();
    const { flashDealList, productsLoading } = useSelector(state => state.products);

    useEffect(() => {
        if (flashDealList.length === 0) {
            dispatch(getDealFlashListAction());
        }
    }, []);

    if (flashDealList.length === 0) {
        return null
    }

    return (
        <section className="container mx-auto my-10">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-200 pb-4">
                <h2 className="font-bold text-lg mb-2 md:mb-0">
                    Deals of the Day
                </h2>
                <div className="mt-2 md:mt-0">
                    <Link href={`/products?type=deals-of-day&filter=paginate_no__40`}>
                        <button className="transition border border-primary py-2 rounded hover:bg-primary hover:text-white px-6">
                            View All
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flash-deal-section mt-4">
                {productsLoading && <ShimmerEffect />}
                {flashDealList && flashDealList.length > 0 && <ProductsCarousel products={flashDealList} />}
            </div>
        </section>
    );
};

export default FlashDeals;
