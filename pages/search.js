import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import PostList from "../components/postList";
import PopularSidebar from "../components/popularSidebar";
import { API_URL } from "../constants";
const Search = ({ s, posts, count }) => {
  const [q, setQ] = React.useState(s);
  return (
    <div className="page-content flex-content">
      <Head>
        <title>Arama - {s}</title>
      </Head>
      <div className="container">
        <div className="search-wrapper">
          <p>İçinde </p>
          <form method="GET" action="/arama">
            <input
              type="text"
              name="s"
              value={q}
              onChange={e => setQ(e.target.value)}
              className="default-input"
            />
          </form>
          <p> kelimesi geçen postlar : </p>
        </div>
        <PostList posts={posts} count={count} slug={`/search/${s}`} />
      </div>
      <PopularSidebar />
      <style jsx>{`
        .search-wrapper {
          width: 100%;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        .search-wrapper > form input {
          box-shadow: 10px 10px 30px var(--bg-color);
          height: 35px;
          line-height: 34px;
          margin-left: 10px;
          margin-right: 10px;
        }
        @media screen and (min-width: 768px) {
          .container {
            max-width: 725px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

Search.getInitialProps = async ({ query }) => {
  const s = query.s;

  let res = await fetch(API_URL + "/post/search/" + s);
  res = await res.json();
  let posts, count;
  if (res.status) {
    posts = res.result;
    count = res.count;
  }
  return { s, posts, count };
};

export default Search;
