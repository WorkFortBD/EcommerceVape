/**
 * External dependencies.
 */
import React, { useEffect, useState } from "react";

export default function HomeStaticBanner({
  pageSlug = 'homepage-banner',
}) {
  const [banner, setBanner] = useState('');
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}page/${pageSlug}`);
      const responseData = await response.json();
      setBanner(
        `${process.env.NEXT_PUBLIC_URL}/images/pages/${responseData.data.image}`
      );
    }

    fetchData();
  }, []);

  return (
    <section className="homepage-section-banner">
      <div className="container mx-auto">
        <img src={banner} className="w-full max-h-[150px]" />
      </div>
    </section>
  );
}
