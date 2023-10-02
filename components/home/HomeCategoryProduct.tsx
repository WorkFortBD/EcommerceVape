import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { IRootReducer } from "../../interfaces/reducers";
import { getProductsData } from "../../store/product/action";
import ProductShortDetail from "../products/ProductShortDetail";

export default function HomeCategoryProduct({
    categorySlug = ''
}) {
    const router = useRouter();
    const { categories } = useSelector((state: IRootReducer) => state.layout);
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setCategory(categories.find((c) => c.short_code === categorySlug));
    }, [categories]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const productsData = await getProductsData({
            category: categorySlug,
            paginate_no: 10
        });
        setProducts(productsData?.data ?? []);
    }

    const clickCategoryPage = (category) => {
        let categoryType = "category";

        router.push(
            `/products?${categoryType}=${encodeURIComponent(
                category.short_code
            )}&name=${encodeURIComponent(category.name)}&filter=paginate_no__40`
        )
            .then(_ => window.scrollTo(0, 0)); // added "name" query param only for collect category name from url on product page
    };

    return (
        <>
            {category !== undefined && category !== null && (
                <div className="container mx-auto my-8">
                    <div className="flex flex-col md:flex-row justify-between px-3">
                        <h2
                            className="font-bold text-lg text-primary pb-4 cursor-pointer"
                            onClick={() => clickCategoryPage(category)}
                        >
                            {category.name}
                        </h2>
                        <div className="md:ml-2 mt-2 md:mt-0 flex flex-wrap">
                            {category.childs.map((child, index: number) => (
                                <Link
                                    onClick={() => clickCategoryPage(child)}
                                    href="#"
                                    key={index}
                                    className="transition m-1 md:m-2 text-sm hover:text-primary-light border border-solid py-1 px-3 rounded font-bold bg-red-200"
                                >
                                    {child.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col md:flex-row px-3">
                        <div className="w-full md:w-1/2 lg:w-1/6 pr-4 mb-4 md:mb-0">
                            <img
                                onClick={() => clickCategoryPage(category)}
                                src={`${process.env.NEXT_PUBLIC_URL}images/categories/${category.image}`}
                                alt={category.name}
                                className="cursor-pointer w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-5/6">
                            <div className="flex flex-wrap pl-4">
                                {products.map((product, index) => (
                                    <ProductShortDetail product={product} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>

    )
}