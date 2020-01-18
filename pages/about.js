import React from "react";
import Head from "next/head";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import ReactMarkdown from "react-markdown";
const article = require("../src/posts/about-me.md").default;
function About() {
  return (
    <div className="page-content about">
      <Head>
        <title>Ben Kimim? - Hakkımda</title>
      </Head>
      <div className="about-top">
        <img className="about-top-img" src="/about-bg.png" alt="Hakkımda" />
        <div className="about-top-info">
          <div className="about-top-info-mail">
            <Link href="mailto:efdal_incesu@hotmail.com">
              <a>
                <IoIosMail className="info-icon" />
              </a>
            </Link>
            <Link href="mailto:efdal_incesu@hotmail.com">
              <a>
                <strong>efdal_incesu@hotmail.com</strong>
              </a>
            </Link>
          </div>
          <div className="about-top-info-user">
            <img
              className="about-top-info-user-img"
              src="/about-photo.png"
              alt="efdal incesu"
            />
            <h2>Efdal İncesu</h2>
          </div>
          <div className="about-top-info-phone">
            <Link href="tel:+90553981">
              <a>
                <MdPhone className="info-icon" />
              </a>
            </Link>
            <Link href="tel:+90553981">
              <a>
                <strong>+90 553 981 7074</strong>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <article className="about-article">
        <ReactMarkdown source={article} />
      </article>
      <style jsx>{`
        .about {
          width: 100%;
          margin-top: 0;
          padding: 0;
        }
        .about-top {
          width: 100%;
          position: relative;
        }
        .about-top-img {
          width: 100%;
          height: 65px;
        }
        .about-top-info {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          margin-top: 95px;
        }
        .about-top-info > div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-top-info > div strong {
          font-size: 14px;
        }
        :global(.info-icon) {
          font-size: 27px;
        }
        .about-top-info-user {
          position: absolute;
          top: 20px;
          margin-left: 20px;
        }
        .about-top-info-user-img {
          width: 93px;
          height: 93px;
          border-radius: 50%;
        }
        .about-top-info-user > h2 {
          font-size: var(--big-font-size);
          font-weight: 500;
          margin-top: 10px;
        }
        .about-article {
          width: 100%;
          padding-left: 15px;
          padding-right: 15px;
          margin-top: 30px;
          padding-bottom: 50px;
        }
        @media screen and (min-width: 768px) {
          .about {
            max-width: 890px;
            margin-top: 65px;
            box-shadow: 10px 10px 30px var(--bg-color);
          }
          .about-top-img {
            height: 113px;
          }
          .about-top-info {
            margin-top: 0;
            justify-content: space-around;
          }
          .about-top-info-user {
            position: initial;
            margin-top: -90px;
            margin-left: -20px;
          }
          .about-top-info-user-img {
            width: 158px;
            height: 158px;
          }
          .about-article {
            width: 760px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            padding-right: 0;
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
export default About;
