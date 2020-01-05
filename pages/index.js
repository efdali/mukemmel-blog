import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ slug }) => (
  <div className="page-content flex-content">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>Left</div>
    <div>Right</div>
  </div>
);

Home.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  return { slug };
};

export default Home;
