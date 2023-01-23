import type { NextPage } from "next";
import CategoryWiseProductContainer from "../../components/categorywiseproductlist/CategoryWiseProductContainer";
import Layout from "../../components/layouts/Layout";
import ProductList from "../../components/products/ProductList";

const Products: NextPage = (props) => {
  const { isMainCategory, subCategories, mainCategoryBanner } = props;
  return (
    <Layout title={"Products"}>
      <div className="container mx-auto">
        <CategoryWiseProductContainer
          isMainCategory={isMainCategory}
          subCategories={subCategories}
          mainCategoryBanner={mainCategoryBanner}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;
  const isMainCategory = query["main-category"] ? true : false;
  if (isMainCategory) {
    const mainCategorySlug = encodeURIComponent(query["main-category"]);

    const uri = `categories/${mainCategorySlug}`;

    try {
      const res = await fetch(uri);

      const dataJSON = await res.json();
      const data = dataJSON.data;

      return {
        props: {
          isMainCategory: isMainCategory,
          subCategories: data?.childs ?? [],
          // mainCategoryBanner: data?.banner_url ?? ''
        },
      };
    } catch (error) {
      return {
        props: {
          isMainCategory: isMainCategory,
          subCategories: null,
        },
      };
    }
  } else {
    return {
      props: {
        isMainCategory: isMainCategory,
        subCategories: null,
      },
    };
  }
};

export default Products;
