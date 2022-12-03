import type { NextPage } from "next";
import Layout from "../../components/layouts/Layout";
import ProductDeatails from "../../components/products/ProductDeatails";

const Product: NextPage = ({ product }) => {
  console.log('product::', product);

  return (
    <Layout title={"Product Deatails"}>
      <ProductDeatails product={product} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const slug = encodeURIComponent(context.params.slug);
  const uri = `${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${slug}`;

  try {
    const res = await fetch(uri);

    const dataJSON = await res.json();
    const data = dataJSON.data;

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      props: { product: data }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default Product;
