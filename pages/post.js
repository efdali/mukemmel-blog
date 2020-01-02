import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Post = ({ slug }) => (
  <div>
    <Head>
      <title>Post İçerik Sayfası</title>
    </Head>
    Post Page- {slug}
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  return { slug };
};

export default Post;
