import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import TextEllipsis from "react-text-ellipsis";
import ReactMarkdown from "react-markdown";
import PostInfo from "./postInfo";
import 'aos/dist/aos.css';

const Post = ({ post }) => {
  return (
    <div className="post" data-aos="fade-up-left">
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
        .post-bottom {
          padding: 15px 16px 4px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        :global(.post-bottom-content){
          font-weight:300;
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
            max-width: 725px;
            height: 260px;
            margin-bottom: 30px;
            box-shadow: 10px 10px 45px 1px var(--bg-color);
          }
          .post-bottom {
            padding-top: 4px;
          }
          .read-more-container {
            display: block;
          }
        }
      `}</style>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object
};
export default Post;
