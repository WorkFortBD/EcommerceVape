import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategoriesAction } from "../../store/layouts/action";
import { IRootReducer } from "../../interfaces/reducers";
import { useRouter } from "next/router";

interface Props { }

export const CategoryComponent = ({ }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories } = useSelector((state: IRootReducer) => state.layout);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesAction());
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

  const getCategoryImage = (category, index: number) => {
    return <img
      src={category.image !== null ? category.image : "/images/products/5.jpeg"}
      alt=""
      className={`
      transition-all 
      scale-100 
      group-hover:scale-110 
      cursor-pointer 
      ${(index % 2 === 0) ? 'rounded-l-full' : 'rounded-r-full'} 
      ml-6  
      w-full 
      h-60
    `}
    />
  }

  return (
    <section className="category-section">
      <div className="container mx-auto mt-12">
        <div className="flex justify-center md:justify-start flex-wrap mx-2 md:mx-4">
          {categories.map((category, index) => (
            <div className="mt-6 flex group px-2 max-w-[400px]" key={index}>
              {
                index % 2 !== 0 &&
                <div>
                  {getCategoryImage(category, index)}
                </div>
              }
              <div className="mt-4 p-4 text-center">
                <h1 className="text-gray-700 text-lg mb-3 mx-4">
                  <span className="text-primary border-b-2 pb-2 border-dotted cursor-pointer hover:text-primary-light"
                    onClick={() =>
                      clickMenuLink(category, true)}>
                    {category.name}
                  </span>
                </h1>
                {category.childs.map((cl, index2) => (
                  <p key={index2}>
                    <span className="cursor-pointer text-slate-600 hover:text-primary-light text-navbar"
                      onClick={() =>
                        clickMenuLink(cl, false)}>
                      {cl.name}
                    </span>
                  </p>
                ))}
              </div>
              {
                index % 2 === 0 &&
                <div>
                  {getCategoryImage(category, index)}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
