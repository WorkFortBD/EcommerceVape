import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./footer";

export default function Layout({
  title = "Home",
  children = <>Blank Page</>,
  favicon = "/favicon.ico",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Head>

      <Header />

      {/* Main Content */}
      {children}
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
