import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductNoFound from "../master/productNotFound/ProductNotFound";
import ProductSingleMini from "../products/ProductShortDetail";

const CategoryWiseMiniProduct = ({ columns }) => {
  const { products } = useSelector((state) => state.category);
  const [cardClassName, setCardClassName] = useState('');

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
        products.length === 0 && (
          <div className="card">
            <ProductNoFound />
          </div>
        )
      }
      {products.length > 0 &&
        products.map((item, index) => (
          <ProductSingleMini
            product={item}
            key={index}
            columnClassName={columns}
            cardClassName={cardClassName}
          />
        ))}
    </>
  );
};

export default CategoryWiseMiniProduct;
