import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Post = ({ post }) => (
  <div>
    <Head>
      <title>Post İçerik Sayfası</title>
    </Head>
    Post Page
  </div>
);

Post.getInitialProps = async ({ req, query }) => {
  
  return {  };
};

export default Post;
