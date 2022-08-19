import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Headertrial from "./Headertrial";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Head>
        <title>NAXY BRANDS</title>
      </Head>
      <header>
        <Header />
        <Headertrial />
      </header>

      <main className="main_container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
