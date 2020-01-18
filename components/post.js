import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import TextEllipsis from "react-text-ellipsis";
import ReactMarkdown from "react-markdown";
import PostInfo from "./postInfo";

const Post = ({ post }) => {
  return (
    <div className="post">
      <PostInfo
        title={post.title}
        createdAt={post.createdAt}
        category={post.category}
        big_image={post.big_image}
        post_slug={post.post_slug}
        category_slug={post.category_slug}
        extraClass={true}
      />

      <div className="post-bottom">
        <TextEllipsis
          lines={4}
          tag={"div"}
          ellipsisChars={"..."}
          tagClass={"post-bottom-content"}
          debounceTimeoutOnResize={200}
          useJsOnly={true}
        >
          <ReactMarkdown source={post.content} />
        </TextEllipsis>
        <div className="read-more-container">
          <Link href={`/p/${post.post_slug}`}>
            <a className="read-more">Devamını Oku</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .post {
          width: 100%;
          height: 204px;
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 20px 8px var(--bg-color);
          position: relative;
        }
        .post-top {
          width: 100%;
          height: 65px;
          background: var(--main-blue) center center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #fff;
          font-size: var(--font-size);
          padding: 8px 16px;
        }
        .post-top-info {
          position: relative;
          top: 70px;
          display: flex;
          justify-content: space-between;
          color: #a1a1a1;
          font-size: var(--small-font-size);
        }
        .category-link {
          color: #a1a1a1;
        }
        .post-title,
        .post-title > a {
          font-size: var(--font-size);
          color: #fff;
          word-break: break-word;
          white-space: pre-wrap;
          overflow: hidden;
        }
        .post-bottom {
          padding: 15px 16px 4px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .read-more-container {
          display: none;
          text-align: right;
        }
        .read-more {
          color: var(--main-blue);
        }
        @media screen and (min-width: 768px) {
          .post {
            max-width: 536px;
            height: 226px;
            margin-bottom: 20px;
            box-shadow: 10px 10px 20px 8px var(--bg-color);
          }
          .post-top {
            height: 104px;
          }
          .post-top-info {
            position: initial;
            color: inherit;
            font-size: inherit;
          }
          .category-link {
            color: #fff;
          }
          .post-title,
          .post-title > a {
            font-size: 18px;
          }
          .post-bottom {
            padding-top: 4px;
          }
          .read-more-container {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object
};
export default Post;
