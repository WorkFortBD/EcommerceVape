import React, { useEffect } from "react";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
// import ReactStars from "react-rating-stars-component";
// import CountdownTimer from "react-component-countdown-timer";
import { getDealFlashListAction } from "../../store/product/action";
// import { formatCurrency } from "../../utils/currency";
import ShimmerEffect from "../master/skeleton/ShimmerEffect";
import ProductShortDetail from "./ProductShortDetail";

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
            <div className="flex justify-between border-b border-slate-200 pb-4">
                <h2 className="font-bold text-lg">
                    Deals OF The Day
                </h2>
                <div>
                    <Link href={`/products?type=deals-of-day&filter=paginate_no__40`}>
                        <button className="transition border border-primary py-2 rounded hover:bg-primary hover:text-white px-6">
                            View all
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flash-deal-section">
                <div className="row flash-deal-row no-gutters">
                    {
                        productsLoading && (
                            <ShimmerEffect />
                        )
                    }
                    {flashDealList && flashDealList.length > 0 &&
                        flashDealList.map((item, index) => {
                            const offerEndDate = new Date(item.offer_end_date).getTime();
                            const currentTime = new Date().getTime();
                            const offerEndCount = (offerEndDate - currentTime) / 1000
                            item.featured_image = item.image;
                            const isOfferAvailable = offerEndCount > 1;
                            const imageURL = `${process.env.NEXT_PUBLIC_URL}images/products/${item.image}`;

                            let padding = "";
                            if (index === 0) {
                                padding = 'pr-md-2';
                            }
                            if (index === 1) {
                                padding = 'pl-md-2';
                            }

                            return (
                                // <div className={`col-md-6 ${padding}`} key={index + 1}>
                                //     <div className="flash-deal-card p-3">
                                //         <div className="flash-deal-img">
                                //             <img
                                //                 width={233}
                                //                 height={233}
                                //                 src={imageURL ? imageURL : ''}
                                //                 alt={item.name}
                                //             />
                                //         </div>
                                //         <div className="flash-deal-detail">
                                //             <div>
                                //                 <Link href={`/products/${item.sku}`}>
                                //                     <span className="flash-deal-title">{item.name}</span>
                                //                 </Link>
                                //                 <ReactStars
                                //                     value={+item.average_rating}
                                //                     size={20}
                                //                     edit={false}
                                //                     activeColor="#ffd700"
                                //                 />
                                //                 <div className="flash-deal-prices">
                                //                     <p className="price" style={{ marginBottom: '0px' }}>
                                //                         <span className="offerPrice">{formatCurrency(item.offer_selling_price)}</span>
                                //                         <br />
                                //                         <del style={{ marginLeft: '10px' }}>{formatCurrency(item.default_selling_price)} </del>
                                //                     </p>

                                //                     <div className="flash-deal-actions">
                                //                         <div>
                                //                             <button>Add to cart</button>
                                //                         </div>
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //             <div className="flash-count">
                                //                 <CountdownTimer
                                //                     showTitle
                                //                     noPoints
                                //                     count={isOfferAvailable ? offerEndCount : 0}
                                //                     size={20}
                                //                     labelSize={14}
                                //                     color="var(--color-primary)"
                                //                     dayTitle="DAY"
                                //                     hourTitle="HRS"
                                //                     minuteTitle="MINS"
                                //                     secondTitle="SECS"
                                //                 />
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                                <ProductShortDetail
                                    product={item}
                                />
                            )
                        })}
                </div>
            </div>
        </section>
    );
};

export default FlashDeals;
