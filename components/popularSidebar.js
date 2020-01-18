import React, { useEffect, useState } from "react";
import Link from "next/link";
import PostInfo from "./postInfo";
import Loading from "./loading";
import { API_URL } from "../constants";
const PopularSideBar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [populars, setPopulars] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (populars.length < 1) {
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

  return (
    <div className="populars">
      <div className="desktop-populars">
        <h3 className="populars-title">Popüler Yazılar</h3>
        <ul>
          {populars.map((p, i) => (
            <li key={i}>
              <h4>
                <Link href={`/p/${p.post_slug}`}>
                  <a>{p.title}</a>
                </Link>
              </h4>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile-populars">
        {populars.map((p, i) => (
          <PostInfo
            title={p.title}
            post_slug={p.post_slug}
            createdAt={p.createdAt}
            category={p.category}
            category_slug={p.category_slug}
            big_image={p.big_image}
            key={i}
          />
        ))}
      </div>
      <style jsx>{`
        .populars {
          width: 100%;
          margin-bottom: 10px;
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
          margin-top: 14px;
          font-size: 14px;
        }
        li > h4 {
          font-weight: lighter;
        }
        @media screen and (min-width: 768px) {
          .populars {
            max-width: 260px;
            padding: 20px;
            box-shadow: 10px 10px 30px var(--bg-color);
          }
          .populars-title {
            display: initial;
            color: var(--main-blue);
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
