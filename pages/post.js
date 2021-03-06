import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FaArrowRight, FaTags } from "react-icons/fa";
import { API_URL, IMAGE_URL } from "../constants";
import PopularSidebar from "../components/popularSidebar";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
const commentSchema = Yup.object().shape({
  name: Yup.string()
    .min(1)
    .max(255)
    .required("Zorunlu Alan"),
  comment: Yup.string()
    .min(3)
    .max(1000)
    .required("Zorunlu Alan")
});

const Post = ({ post, comments, next }) => {
  const [commentsState, setComments] = useState(comments);
  return (
    <div className="page-content flex-content">
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.tags} />
        <meta name="description" content={`${post.title} - ${post.tags}`} />
      </Head>

      <div className="container">
        {next && (
          <div className="next-post">
            <h3>
              <Link href={`/p/${next.post_slug}`}>
                <a>
                  {next.post_title}
                  <FaArrowRight className="next-post-icon" />
                </a>
              </Link>
            </h3>
          </div>
        )}
        {post && (
          <div className="post">
            <div className="post-info">
              <div
                className="post-info-overlay"
                style={{
                  backgroundImage: `url(${IMAGE_URL}${post.big_image})`
                }}
              ></div>
              <h2 className="post-info-title">{post.title}</h2>
              <div className="post-info-small">
                <Link href={`/k/${post.category_slug}`}>
                  <a className="post-info-small-item">{post.category}</a>
                </Link>
                <small className="post-info-small-item">{post.createdAt}</small>
              </div>
            </div>
            <article className="post-content">
              <ReactMarkdown source={post.content} />
            </article>
            <div className="post-tags">
              <FaTags className="post-tags-icon" />
              {post.tags.split(",").map((t, i) => (
                <Link href={`/arama?s=${t}`} key={i}>
                  <a className="post-tags-item">{t}</a>
                </Link>
              ))}
            </div>
            <div className="comments">
              <h2>Yorumlar</h2>
              <Formik
                initialValues={{ name: "", comment: "" }}
                validationSchema={commentSchema}
                onSubmit={(values, { setValues }) => {
                  const comment = {
                    user: values.name,
                    content: values.comment
                  };
                  fetch(API_URL + "/comment/add", {
                    method: "POST",
                    body: JSON.stringify({
                      user: values.name,
                      comment: values.comment,
                      postId: post.post_id
                    })
                  })
                    .then(res => res.json())
                    .then(res => {
                      if (res.status) {
                        setComments([comment, ...commentsState]);
                        setValues({ name: "", comment: "" });
                      }
                    });
                }}
              >
                {({ errors, touched }) => (
                  <Form className="comment-form">
                    <Field
                      name="name"
                      placeholder="isim"
                      className="name-input default-input"
                    />
                    <br />
                    <Field
                      name="comment"
                      as="textarea"
                      placeholder="yorum"
                      className="comment-textarea default-input"
                    />
                    <button type="submit" className="add-comment-btn">
                      Yorum Yap
                    </button>
                  </Form>
                )}
              </Formik>

              {commentsState.map((c, i) => (
                <div className="comments-item" key={i}>
                  <h3>{c.user}</h3>
                  <p>{c.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {!post && <div>Böyle bir post yok</div>}
      </div>
      <PopularSidebar />
      <style jsx>{`
        .container {
          max-width: 725px;
          width: 100%;
          margin-bottom: 40px;
          order: 1;
        }
        .post {
          width: 100%;
          box-shadow: 10px 10px 35px var(--bg-color);
        }
        .next-post {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: bolder;
          margin-right: 10px;
        }
        :global(.next-post-icon) {
          font-size: 16px;
          margin-left: 10px;
        }
        .post-info-overlay {
          width: 100%;
          height: 161px;
          background: var(--main-blue) no-repeat center center;
          background-size:cover;
        }
        h2 {
          color: var(--main-blue);
        }
        .post-info-title {
          padding-left: 25px;
          padding-right: 25px;
          margin-top: -35px;
          color: #fff;
          font-weight:600;
        }
        .post-info-small {
          margin-top: 25px;
          padding-left: 25px;
          padding-right: 10px;
          display: flex;
          justify-content: space-between;
        }
        .post-info-small-item {
          color: #959595;
          font-size: 13px;
          margin-right: 15px;
          font-weight: 600;
        }
        .post-content {
          padding-left: 25px;
          padding-right: 25px;
          margin-top: 30px;
          margin-bottom: 30px;
          line-height:initial;
          font-weight:300;
        }
        :global(.post-content img) {
          max-width: 100%;
        }
        .post-tags {
          padding-left: 25px;
          padding-right: 25px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }
        :global(.post-tags-icon) {
          font-size: 21px;
          margin-right: 20px;
          color: #959595;
        }
        .post-tags-item {
          box-shadow: 5px 5px 12px 4px var(--bg-color);
          padding: 15px 16px;
          font-size: 16px;
          height: 26px;
          display: flex;
          align-items: center;
          flex-wrap: no-wrap;
          margin-right: 16px;
          margin-bottom: 15px;
        }
        .comments {
          width: 100%;
          padding-left: 25px;
          padding-right: 25px;
          padding-bottom: 40px;
        }
        :global(.comment-form) {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          margin-bottom: 45px;
        }
        :global(.default-input) {
          box-shadow: 5px 5px 10px 2px var(--bg-color);
        }
        :global(.name-input) {
          width: 165px;
          margin-top: 30px;
          margin-bottom: 15px;
          height: 35px;
        }
        :global(.comment-textarea) {
          width: 326px;
          height: 90px;
        }
        :global(.name-input) ,:global(.comment-textarea){
          color:var(--font-color);
          background-color:var(--container-bg-color);
          border:1px solid var(--bg-color);
        }
        .add-comment-btn {
          background-color: var(--main-blue);
          color: #fff;
          height: 32px;
          cursor: pointer;
          width: 101px;
          margin-top: 15px;
        }
        .comments-item {
          margin-top: 30px;
        }
        .comments-item > h3 {
          margin-bottom: 6px;
        }
        .comments-item > h3,
        .comments-item > p {
          word-break: break-word;
          white-space: pre-wrap;
        }

        @media screen and (min-width: 768px) {
          .page-content {
            margin-top: 30px;
          }
          .container {
            order: 0;
          }
          .next-post {
            margin-bottom: 25px;
            margin-right: 0;
          }
          .post-info-overlay {
            height: 104px;
          }
          .post-info-title {
            color: var(--main-blue);
            margin-top: 15px;
          }
          .post-info-small {
            margin-top: 10px;
            padding-right: 25px;
          }
          .post-tags-item {
            margin-bottom: 0;
          }
          :global(.comment-form) {
            display: block;
          }
          :global(.comment-textarea) {
            height: 120px;
            margin-bottom: -7px;
          }
          .add-comment-btn {
            margin-left: 35px;
          }
        }
      `}</style>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const slug = query.slug;

  let result = await fetch(API_URL + "/get/" + slug);
  result = await result.json();
  let post, comments, nextPost;
  if (result.status) {
    post = result.result;
    comments = result.comments;
    nextPost = result.next;
  }
  return { slug, post, comments, next: nextPost };
};

export default Post;
