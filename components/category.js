import React, { useEffect, useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import { API_URL } from "../constants";
import Error from "./error";
import Loading from "./loading";
const Category = ({ show, onMouseLeave }) => {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (
      (show && categories.length == 0) ||
      document.documentElement.clientWidth < 768
    ) {
      fetchCategories();
    }
  }, []);

  const fetchCategories = () => {
    setLoading(true);
    fetch(`${API_URL}/category`)
      .then(res => res.json())
      .then(res => {
        if (res.status) {
          setCategories(res.result);
        } else {
          setMessage(res.message);
        }
        setLoading(false);
      });
  };
  if (show && message && categories.length < 1) {
    return <Error message={message} />;
  }
  return (
    <ul className={`${show ? "show" : ""}`} onMouseLeave={onMouseLeave}>
      {loading && <Loading />}
      {categories.length > 0 &&
        categories.map((c, i) => (
          <li key={i}>
            <Link href={`/k/${c.slug}`}>
              <a>{c.name}</a>
            </Link>
          </li>
        ))}
      <style jsx>{`
        ul {
          position: relative;
          text-align: center;
          box-shadow: 1px 1px 10px var(--bg-color);
          padding: 20px;
          width: 146px;
          z-index: 9;
          background: var(--container-bg-color);
          margin-top: 10px;
          transition: 0.3s all;
        }
        @media screen and (min-width: 768px) {
          ul {
            position: absolute;
            opacity: 0;
            pointer-events: none;
          }
          ul.show {
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </ul>
  );
};
Category.propTypes = {
  show: PropTypes.bool.isRequired,
  onMouseLeave: PropTypes.func
};
export default Category;
