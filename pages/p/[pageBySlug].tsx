import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import Layout from "../../components/layouts/Layout";
import Head from 'next/head';

export default function PageBySlug() {
  const [parsedHtml, setParsedHtml] = useState();
  const router = useRouter();
  const [pageData, setPageData] = useState(null);
  const [pageDataLoading, setPageDataLoading] = useState(true);
  const { pageBySlug } = router.query;

  useEffect(() => {
    setPageDataLoading(true);
    getAndSetPageData();
  }, [pageBySlug]);

  const getAndSetPageData = async () => {
    const pageDataRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}page/${pageBySlug}`
    );
    const page = await pageDataRes.json();

    const pageData = page.data;
    setPageData(pageData);
    setPageDataLoading(false);
  };

  useEffect(() => {
    if (pageData !== null) {
      const parsedHtml = DOMPurify.sanitize(pageData?.description, {
        USE_PROFILES: { html: true },
      });
      setParsedHtml(parsedHtml);
    }
  }, [pageData]);

  return (
    <Layout title={pageData?.title}>
      {pageData?.meta_title && (
        <Head>
          <meta property="og:title" content={pageData?.meta_title} key="title" />
          <meta property="og:description" content={pageData?.meta_description} key="description" />
        </Head>
      )
      }
      <div className="container mx-auto p-3">
        {/* {
                    pageDataLoading && <LoadingSpinner text="Page Loading..." />
                }

                {!pageData && !pageDataLoading && <Notfound />} */}

        {pageData && (
          <div className="col-lg-12 px-0">
            <div className="">
              <div className="">
                <h2 className="text-4xl mt-10 mb-4 text-primary">{pageData?.title}</h2>
                <hr />
              </div>
              <div
                className="website-info-content"
                dangerouslySetInnerHTML={{ __html: parsedHtml }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </Layout >
  );
}

/***********************************************/
/*          For Static Pages(Don't delete)     */
/***********************************************/

// export async function getStaticProps(context) {
//     const { pageBySlug } = context.params;
//     const pageDataRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}page/${pageBySlug}`);
//     const pageData = await pageDataRes.json();

//     if(!pageData.data) {
//         return {
//             notFound: true
//         }
//     }

//     return {
//         props: {
//             pageData: pageData.data
//         },
//         revalidate: 3600
//     }
// }

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {params: {pageBySlug: 'help-center'}},
//             {params: {pageBySlug: 'how-to-buy'}},
//             {params: {pageBySlug: 'return-and-refund-policy'}},
//             {params: {pageBySlug: 'shipping-method'}},
//             {params: {pageBySlug: 'same-day-delivery'}},
//             {params: {pageBySlug: 'faq'}},
//             {params: {pageBySlug: 'about-us'}},
//             {params: {pageBySlug: 'career'}},
//             {params: {pageBySlug: 'contact'}},
//             {params: {pageBySlug: 'terms-&-condition'}},
//             {params: {pageBySlug: 'privacy-policy'}},
//             {params: {pageBySlug: 'blog'}}
//         ],
//         fallback: true
//     }
// }
