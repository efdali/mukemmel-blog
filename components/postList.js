import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Post from "./post";
import Loading from "./loading";
import { API_URL } from "../constants";
const PostList = props => {
  const [posts, setPosts] = useState(props.posts);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
  }, []);
  const scrollHandle = () => {
    if (page < props.count - 1) {
      if (
        document.documentElement.scrollTop + window.innerHeight + 120 >=
        document.documentElement.offsetHeight
      ) {
        setPage(page + 1);
        fetchPosts();
      }
    } else window.removeEventListener("scroll", scrollHandle);
  };

  const fetchPosts = async () => {
    setLoading(true);
    let url = API_URL + "/post/";
    if (props.slug) url += props.slug + "/";
    let res = await fetch(url + page);
    res = await result.json();
    if (res.status) setPosts([...posts, ...res.result]);
    setLoading(false);
  };

  if (posts.length < 0) {
    return <div>Şuan Post Yok...</div>;
  }

  return (
    <div className="posts-content">
      {posts.map((p, i) => (
        <Post post={p} key={i} />
      ))}
      {isLoading && <Loading />}
      {page + 1 == props.count && <div>Bütün Postları Gördün...</div>}
      <style jsx>{`
        .posts-content {
          order: 2;
        }
        @media screen and (min-width: 768px) {
          .posts-content {
            order: 0;
          }
        }
      `}</style>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  count: PropTypes.number
};

PostList.defaultProps = {
  posts: [],
  count: 0
};

export default PostList;
