import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getCategoriesHomepageAction } from "../../store/layouts/action";
import { IRootReducer } from "../../interfaces/reducers";
import { useRouter } from "next/router";

interface Props { }

export const CategoryComponent = ({ }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categoriesHome } = useSelector((state: IRootReducer) => state.layout);
  let categories=categoriesHome;

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesHomepageAction());
    }
  }, []);

  const clickMenuLink = (category, isMainCategory = false) => {
    let categoryType = "category";

    router.push(
      `/products?${categoryType}=${encodeURIComponent(
        category.short_code
      )}&name=${encodeURIComponent(category.name)}&filter=paginate_no__40`
    )
      .then(_ => window.scrollTo(0, 0)); // added "name" query param only for collect category name from url on product page
  };

  const getCategoryImage = (category: any, index: number) => {
    return <img
      src={category.image !== null ? `${process.env.NEXT_PUBLIC_URL}images/categories/${category.image}` : "/images/products/5.jpeg"}
      alt=""
      className={`
      transition-all 
      scale-100 
      group-hover:scale-110 
      cursor-pointer 
      ${(index % 2 === 0) ? 'rounded-l-full' : 'rounded-r-full'}
      w-full
      h-60
    `}
    />
  }
  return (
    <section className="category-section">
      <div className="container mx-auto mt-6 md:mt-12">
        <div className="flex flex-wrap justify-center md:justify-start mx-2 md:mx-4">
          {categories.map((category, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-2" key={index}>
              <div className="flex max-w-sm mx-auto">
                {/* Image */}
                {/* {index % 2 !== 0 && ( */}
                  <div className="relative overflow-hidden w-1/2">
                    {getCategoryImage(category, index)}
                  </div>
                {/* )} */}

                {/* Category Info */}
                <div className="w-1/2 mt-4 p-4 text-center">
                  <h1 className="text-gray-700 text-lg mb-3 mx-4 min-w-[150px]">
                    <span
                      className="text-primary border-b-2 pb-2 border-dotted cursor-pointer hover:text-primary-light font-bold"
                      onClick={() => clickMenuLink(category, true)}
                    >
                      {category.name}
                    </span>
                  </h1>
                  {category.childs.map((cl, index2) => (
                    <p key={index2}>
                      <span
                        className="cursor-pointer text-slate-600 hover:text-primary-light text-navbar font-bold"
                        onClick={() => clickMenuLink(cl, false)}
                      >
                        {cl.name}
                      </span>
                    </p>
                  ))}
                  <button
                    className="mt-3 transition-transform scale-100 hover:scale-105 text-lg font-bold rounded-full bg-slate-700 hover:opacity-80 px-3 py-1 cursor-pointer text-white"
                    onClick={() => clickMenuLink(category, true)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};
