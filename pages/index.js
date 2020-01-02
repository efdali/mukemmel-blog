import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ slug }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    Anasayfa {slug}
  </div>
);

Home.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  return { slug };
};

export default Home;
