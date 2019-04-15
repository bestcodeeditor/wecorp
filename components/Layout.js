import React from "react";
import HeaderApp from "./Header";
import MainApp from "./Main";
import FooterApp from "./Footer";
import Head from "next/head";

const Layout = ({ children, title = "wecorporate" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderApp />
      {children}
      <FooterApp />
    </div>
  );
};

export default Layout;
