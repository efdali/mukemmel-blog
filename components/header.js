import React, { useState } from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSearch,
  FaCog,
  FaBars
} from "react-icons/fa";
import Category from "./category";
import Modal from "react-modal";
import Head from "next/head";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#__next");
const HeaderTop = ({ className }) => {
  const [mailAddress, setMailAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const blur = showModal ? 2 : 0;

  const subscribeHandler = e => {
    e.preventDefault();
    if (!e) {
      return false;
    }
    setShowModal(false);
    alert(mailAddress + " mail listesine eklendi.");
  };
  return (
    <div className={`header-social ${className}`}>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
      >
        <div className="subscribe">
          <form onSubmit={subscribeHandler}>
            <input
              type="email"
              className="subscribe-input"
              placeholder="mail adresiniz"
              value={mailAddress}
              onChange={e => setMailAddress(e.target.value)}
            />
            <button type="submit" className="icon-btn subscribe-btn">
              Abone Ol
            </button>
          </form>
        </div>
      </Modal>
      <a
        onClick={e => {
          e.preventDefault();
          setShowModal(!showModal);
        }}
        href="#"
      >
        abone ol
      </a>
      <a href="https://twitter.com/Ncesuefdal">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/efdalincesu/">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.github.com/efdali/mukemmel-blog">
        <FaGithub className="icon" />
      </a>
      <style jsx>{`
        .header-social {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          margin-bottom: 8px;
          font-weight: 600;
        }
        .subscribe > form {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .subscribe-input {
          height: var(--finger-size);
          line-height: calc(var(--finger-size) - 1px);
        }
        .subscribe-btn {
          background-color: var(--main-blue);
          color: #fff;
          width: auto;
          padding-left: 5px;
          padding-right: 5px;
          margin-top: 15px;
        }
        :global(#__next) {
          -webkit-filter: blur(${blur}px);
        }
        :global(.header-social > a > .icon) {
          color: var(--main-blue);
          font-size: calc(var(--big-font-size) + 0.4em);
        }
        :global(.ReactModal__Overlay.ReactModal__Overlay--after-open) {
          background-color: initial !important;
        }
        :global(.ReactModal__Content.ReactModal__Content--after-open) {
          border: none !important;
          box-shadow: 0px 6px 19px var(--font-color);
        }
        @media screen and (min-width: 768px) {
          .header-social > a {
            margin-left: 20px;
          }
          .subscribe-btn {
            margin-left: 15px;
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};
const HeaderNav = ({ search, nav }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      {darkTheme && <link rel="stylesheet" href="/dark-variable.css" />}
      <div className={`search ${search}`}>
        <FaSearch className="icon" />
        <form method="GET" action="/arama">
          <input
            type="text"
            placeholder="ara"
            className="search-input"
            name="s"
          />
        </form>
      </div>
      <nav className={`header-nav ${nav}`}>
        <Link href="/">
          <a
            onClick={e => {
              e.preventDefault();
              setShowCategories(!showCategories);
            }}
          >
            Kategoriler
          </a>
        </Link>
        <Category
          show={showCategories}
          onMouseLeave={() => setShowCategories(false)}
        />
        <Link href="/hakkimda">
          <a>Hakkımda</a>
        </Link>
        <button
          className="icon-btn"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          <FaCog />
        </button>
      </nav>
    </>
  );
};

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <HeaderTop className="desktop" />
        <div className="header-container-sub">
          <h1>
            <Link href="/">
              <a className="header-brand">mukemmel</a>
            </Link>
          </h1>
          <div className="desktop-show">
            <HeaderNav />
          </div>
          <button
            className="icon-btn menu-btn"
            onClick={() => setShowHamburger(!showHamburger)}
            type="button"
          >
            <FaBars className="menu-icon" />
          </button>
        </div>
      </div>
      <div className={`hamburger-menu ${showHamburger ? "show" : ""}`}>
        <HeaderNav search="mobile-search" nav="mobile-nav" />
        <HeaderTop className="mobile-header-top" />
      </div>
      <style jsx>{`
        .header {
          width: 100%;
          background-color: var(--container-bg-color);
          height: 59px;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 6px var(--bg-color);
          padding-left: 20px;
          padding-right: 20px;
        }
        .header-container {
          max-width: 1088px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .header-container-sub {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-brand {
          color: var(--main-blue);
          font-size: 30px;
          font-weight: bold;
          font-family: "Bahnschrift";
        }
        .desktop-show {
          display: none;
        }
        .menu-btn {
          font-size: var(--big-font-size);
          z-index: 999;
        }
        .hamburger-menu {
          position: absolute;
          width: 189px;
          height: 100vh;
          background: var(--container-bg-color);
          box-shadow: 10px 0 30px var(--font-color);
          right: 0;
          top: 0;
          padding-top: 59px;
          transition: 0.3s all;
          transform: translateX(100%);
          opacity: 0;
          z-index: 9;
        }
        .hamburger-menu.show {
          transform: translateX(0);
          opacity: 1;
        }
        @media screen and (min-width: 768px) {
          .header {
            height: 130px;
            padding-top: 10px;
            display: block;
          }
          .desktop-show {
            flex: 1;
            display: flex;
            margin-left: 45px;
            align-items: center;
          }
          .menu-btn {
            display: none;
          }
          .hamburger-menu {
            display: none;
          }
        }
      `}</style>
      <style jsx global>{`
        .desktop {
          display: none !important;
        }
        .search {
          background-color: var(--container-bg-color);
          box-shadow: 5px 5px 20px var(--bg-color);
          display: flex;
          align-items: center;
          height: 30px;
          width: 200px;
          padding-left: 10px;
          padding-right: 10px;
        }
        .search > form {
          flex: 1;
        }
        .search > .icon {
          color: var(--font-color);
          font-size: var(--font-size);
        }
        .search .search-input {
          border: none;
          outline: none;
          width: 100%;
          padding-left: 10px;
          background-color: var(--container-bg-color);
          color: var(--font-color);
        }
        .header-nav {
          margin-left: auto;
        }
        .header-nav > a,
        .header-nav > button {
          font-size: var(--big-font-size);
          font-weight: 400;
        }
        .mobile-search {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
        }
        .mobile-nav > * {
          margin-top: 5px;
          margin-left: 0;
        }
        .mobile-header-top {
          flex-direction: column;
          margin-top: 20px;
        }
        .mobile-header-top > a:first-child {
          order: 3;
        }
        @media screen and (min-width: 768px) {
          .desktop {
            display: flex !important;
          }
          .header-nav > a,
          .header-nav > button {
            margin-left: 25px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
