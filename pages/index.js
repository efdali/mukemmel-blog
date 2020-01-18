import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import { API_URL } from "../constants";
import PostList from "../components/postList";
import PopularSideBar from "../components/popularSidebar";

const Home = ({ posts, count, slug }) => (
  <div className="page-content flex-content">
    <Head>
      <title>Mükemmel Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PostList posts={posts} count={count} slug={slug} />
    <PopularSideBar />
  </div>
);

Home.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  let url = API_URL + "/post/";
  if (slug) url += slug + "/0";
  let res = await fetch(url);
  res = await res.json();
  const posts = res.result;
  const count = parseInt(res.count);
  return { posts, count, slug };
};

export default Home;
