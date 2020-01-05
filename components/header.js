import React, { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaSearch, FaCog, FaBars } from "react-icons/fa";
const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-top">
          <Link href="#">
            <a>abone ol</a>
          </Link>
          <Link href="#">
            <a>
              <FaTwitter className="icon" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaLinkedin className="icon" />
            </a>
          </Link>
        </div>
        <div className="header-container-sub">
          <Link href="/">
            <a className="header-brand">mukemmel</a>
          </Link>
          <div className="desktop-show">
            <div className="search">
              <FaSearch className="icon" />
              <form>
                <input type="text" placeholder="ara" className="search-input" />
              </form>
            </div>
            <nav className="header-nav">
              <Link href="/">
                <a>Kategoriler</a>
              </Link>
              <Link href="/hakkimda">
                <a>Hakkımda</a>
              </Link>
              <button className="icon-btn">
                <FaCog />
              </button>
            </nav>
          </div>
          <button className="icon-btn menu-btn" onClick={()=>setShowHamburger(!showHamburger)} type="button">
            <FaBars className="menu-icon" />
          </button>
        </div>
      </div>
      <div className={`hamburger-menu ${showHamburger ? "show" : ""}`}>
        hamburger menu
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
          max-width: 838px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .header-container-top {
          display: none;
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
          transition: 0.3s all;
          transform: translateX(100%);
          opacity: 0;
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
          .header-container-top {
            display: flex;
            justify-content: end;
            align-items: center;
            width: 100%;
            margin-bottom: 8px;
          }
          .header-container-top > a {
            margin-left: 20px;
          }
          .desktop-show {
            flex: 1;
            display: flex;
            margin-left: 45px;
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
        .header-container-top > a > .icon {
          color: var(--main-blue);
          font-size: calc(var(--big-font-size) + 0.4em);
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
        }
        .header-nav {
          margin-left: auto;
        }
        .header-nav > a,
        .header-nav > button {
          margin-left: 25px;
          font-size: var(--big-font-size);
        }
      `}</style>
    </header>
  );
};

export default Header;
