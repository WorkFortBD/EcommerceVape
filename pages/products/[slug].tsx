import type { NextPage } from "next";
import Head from 'next/head';
import Layout from "../../components/layouts/Layout";
import ProductDetails from "../../components/products/ProductDetails";

const Product: NextPage = ({ product }) => {
  return (
    <Layout title={product.meta_title??'Product Details'}>
      {product.meta_title &&(
      <Head>
      <meta property="og:title" content={product.meta_title} key="title" />
      <meta property="og:description" content={product.meta_description} key="description" />
      <link rel="canonical" href="https://vapestoreksa.com" />
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
