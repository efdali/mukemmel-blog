import React from "react";
import Head from "next/head";
import Header from "./header";
const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/footer.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>Mükemmel Blog</title>
      <meta name="description" content="Mükemmel Blog" />
      <meta
        name="keywords"
        content="mükemmel,blog,yazılım,react,next,javascript"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="copyright" content="(c) 2020" />
    </Head>
    <div className="wrapper">
      <Header />
      {children}
      <style>{`
        .wrapper{
          max-width:1088px;
          margin-left:auto;
          margin-right:auto;
          background-color:var(--container-bg-color);
        }
      `}</style>
    </div>
  </>
);

export default Layout;
