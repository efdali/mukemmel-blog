import React from "react";
import Head from "next/head";
import Header from "./header";
const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
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
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-144181286-2"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-144181286-2');`
        }}
      />
    </Head>
    <div className="wrapper">
      <Header />
      {children}
      <style>{`
        .wrapper{
          max-width:1300px;
          margin-left:auto;
          margin-right:auto;
          background-color:var(--container-bg-color);
          min-height:100vh;
        }
      `}</style>
    </div>
  </>
);

export default Layout;
