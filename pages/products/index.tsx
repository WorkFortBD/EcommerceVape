import type { NextPage } from "next";
import Layout from "../../components/layouts/Layout";
import ProductList from "../../components/products/ProductList";

const Products: NextPage = (props) => {
    console.log('productsProps',);
    let products=props.data.data;
    return (
        <Layout title={"Products"}>
            <ProductList products={products} />
        </Layout>
    );
};

export const getServerSideProps = async (context) => {
    // const slug = encodeURIComponent(context.params.slug);
    const uri = `${process.env.NEXT_PUBLIC_API_URL}get-items?p=1`;
  
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
        props: { data }
      }
    } catch (error) {
      return {
        notFound: true
      }
    }
  }

export default Products;
