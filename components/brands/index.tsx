
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { IRootReducer } from "../../interfaces/reducers";
import { getBrandsAction } from "../../store/category/action";

export default function BrandList() {
    const dispatch = useDispatch();
    const { brands } = useSelector((state: IRootReducer) => state.category);
    useEffect(() => {
        dispatch(getBrandsAction());
    }, []);

    return (
        <div className="container mx-auto py-8 mt-20">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 5,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    brands.map((brand, index: number) => (
                        <div key={index}>
                            <img src={`${process.env.NEXT_PUBLIC_URL}images/brands/${brand.image}`} className="w-32 h-20" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}