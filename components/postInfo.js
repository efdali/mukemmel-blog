import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { IMAGE_URL } from "../constants";
const PostInfo = props => {
  return (
    <div
      className={`post-top ${props.isSlider ? "slider-top" : ""}`}
      style={{
        backgroundImage: `url(${IMAGE_URL}${props.big_image})`
      }}
    >
      <div
        className={`post-top-info ${props.extraClass ? "mobile-down " : ""}`}
      >
        <span className="post-top-info-date">{props.createdAt}</span>
        <Link href={`/k/${props.category_slug}`}>
          <a
            className={`category-link ${props.extraClass ? "color-gray" : ""}`}
          >
            {props.category}
          </a>
        </Link>
      </div>
      <h2 className="post-title">
        <Link href={`/p/${props.post_slug}`}>
          <a>{props.title}</a>
        </Link>
      </h2>
      <style jsx>{`
        .post-top {
          width: 100%;
          height: 65px;
          background: var(--main-blue) no-repeat center center;
          background-size:cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #fff;
          font-size: var(--font-size);
          padding: 8px 16px;
        }
        .post-top.slider-top {
          height: 165px;
          padding-top: 30px;
          padding-bottom: 15px;
        }
        .post-top.slider-top > .post-top-info {
          color: #fff;
        }
        .post-top-info {
          display: flex;
          justify-content: space-between;
        }
        .mobile-down {
          position: relative;
          top: 70px;
          color: #a1a1a1;
          font-size: var(--small-font-size);
        }
        .category-link {
          color: #fff;
        }
        .color-gray {
          color: #a1a1a1;
        }
        .post-title,
        .post-title > a {
          font-size: var(--font-size);
          color: #fff;
          word-break: break-word;
          white-space: pre-wrap;
          overflow: hidden;
          font-weight:400;
        }
        @media screen and (min-width: 768px) {
          .post-top {
            height: 114px;
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
          :global(.slick-dots li.slick-active button::before) {
            color: var(--main-blue);
          }
          :global(.slick-dots li button::before) {
            font-size: 8px;
            color: var(--main-blue);
          }
        }
      `}</style>
    </div>
  );
};
PostInfo.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  post_slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  category_slug: PropTypes.string.isRequired,
  big_image: PropTypes.string.isRequired,
  extraClass: PropTypes.bool,
  isSlider: PropTypes.bool
};
PostInfo.defaultProps = {
  extraClass: false,
  isSlider: false
};
export default PostInfo;
