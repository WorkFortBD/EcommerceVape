import type { NextPage } from "next";
import { Head } from "next/document";
import Layout from "../../components/layouts/Layout";
import ProductDetails from "../../components/products/ProductDetails";

const Product: NextPage = ({ product }) => {
  console.log('product', product.meta_title)
  return (
    <Layout title={product.meta_title??'Product Details'}>
      {product.meta_title &&(
      <Head>
      <meta property="og:title" content={product.meta_title} key="title" />
      </Head>
      )
      }
      
      <ProductDetails product={product} />
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
