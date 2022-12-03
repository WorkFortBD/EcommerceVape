import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./footer";

interface ILayout {
  title: string;
  children: React.ReactNode;
}

export default function Layout({
  title = "Home",
  children = <>Blank Page</>
}: ILayout) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>

      <Header />

      {/* Main Content */}
      {children}
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
