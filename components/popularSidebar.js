import React, { useEffect, useState } from "react";
import Link from "next/link";
import PostInfo from "./postInfo";
import Loading from "./loading";
import { API_URL } from "../constants";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import fetch from 'isomorphic-unfetch';
const PopularSideBar = () => {
  const [populars, setPopulars] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (populars.length < 1 && !isLoading) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    let res = await fetch(API_URL + "/post/populars");
    res = await res.json();
    if (res.status) {
      setPopulars(res.result);
    }
    setLoading(false);
  };
  var settings = {
    dots: true,
    autoPlay: true,
    autoplaySpeed: 500,
    lazyLoad: true,
    initialSlide: 1
  };
  return (
    <div className="populars">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="desktop-populars">
        <h3 className="populars-title">Popüler Yazılar</h3>
        {isLoading && <Loading />}
        <ul>
          {populars.length > 0 &&
            populars.map((p, i) => (
              <li key={i}>
                <h4>
                  <Link href={`/p/${p.post_slug}`}>
                    <a>{p.title}</a>
                  </Link>
                </h4>
              </li>
            ))}
          {populars.length == 0 && !isLoading && (
            <div>Henüz Popüler Post Yok!</div>
          )}
        </ul>
      </div>
      <div className="mobile-populars">
        <Slider {...settings}>
          {populars.length > 0 &&
            populars.map((p, i) => (
              <PostInfo
                title={p.title}
                post_slug={p.post_slug}
                createdAt={p.createdAt}
                category={p.category}
                category_slug={p.category_slug}
                big_image={p.big_image}
                isSlider={true}
                key={i}
              />
            ))}
        </Slider>
      </div>
      <style jsx>{`
        .populars {
          width: 100%;
          margin-bottom: 30px;
        }
        .desktop-populars {
          display: none;
        }
        .mobile-populars {
          display: block;
        }
        ul {
          padding: 5px 14px;
        }
        li {
          margin-top: 18px;
          font-size: 14px;
        }
        li > h4 {
          font-weight: 400;
        }
        @media screen and (min-width: 768px) {
          .populars {
            max-width: 260px;
            padding: 20px;
            box-shadow: 10px 10px 30px var(--bg-color);
            margin-bottom: 0;
          }
          .populars-title {
            display: initial;
            color: var(--main-blue);
            font-weight:600;
          }
          .desktop-populars {
            display: block;
          }
          .mobile-populars {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PopularSideBar;
