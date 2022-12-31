import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductNoFound from "../master/productNotFound/ProductNotFound";
import ProductShortDetail from "../products/ProductShortDetail";

const CategoryWiseMiniProduct = ({ columns }) => {
  const  products  = useSelector((state) => state.category);
  console.log('products', products)
  const [cardClassName, setCardClassName] = useState('product-card categories_wise_product_card shadow-sm mb-sm-2 mb-md-3 bg-white rounded');

  // useEffect(() => {
  //   if (columns == "col-md-3") {
  //     setCardClassName(`${cardClassName} filter_column_3`);
  //   } else {
  //     setCardClassName(`${cardClassName} filter_column_10`);
  //   }
  // }, []);

  return (
    <>
      {
        products.products.length === 0 && (
          <div className="col-lg-12">
            <ProductNoFound />
          </div>
        )
      }
      {products.products.length > 0 &&
        products.products.map((item, index) => (
          <ProductShortDetail
            item={item}
            key={index}
            columnClassName={columns}
            cardClassName={cardClassName}
          />
        ))}
    </>
  );
};

export default CategoryWiseMiniProduct;
