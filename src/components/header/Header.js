import React, { useEffect, useState } from "react";
import Basket from "./Basket";
import "./Header.css";
import {
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";
import {
  BsTwitter,
  BsYoutube,
  BsSearch,
  BsChevronCompactDown,
  BsPerson,
} from "react-icons/bs";
import logo from "../../logo.png";
import { openModal } from "../header/Basket.jsx";
import { fetchCategories, fetchProducts, login } from "../../helpers/fetchData";
import Account from "./Account";
const Header = () => {
  const [token, setToken] = useState();

  const [text, setText] = useState([]);

  const [category, setCategory] = useState();

  // console.log(token);
  // const loginHandler = () => {
  //   login().then((res) => {
  //     res.json().then((r) => {
  //       setToken(r.data.token);
  //     });
  //   });
  // };

  useEffect(() => {
    fetchProducts(1, token).then((res) => {
      res.json().then((r) => {
        setText(r);
      });
    });
  }, [token]);

  useEffect(() => {
    fetchCategories(1, token).then((cat) => {
      cat.json().then((cat) => {
        setCategory(cat.data);
      });
    });
  }, [token]);

  // console.log("category:", category);

  // console.log(text);
  return (
    <div>
      <div>
        <div className="icon-bar">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF className="top-icon" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <BsTwitter className="top-icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <BsYoutube className="top-icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram className="top-icon" />
          </a>
          <div className="info">
            <button className="info-support border-0">Yardım</button>
            <button className="info-blog border-0">Blog</button>
          </div>
        </div>
        <input type="checkbox" id="check" />
        <nav>
          <div className="logo">
            <p className="res-logo">Karma</p>
            <div className="logo">
              <img src={logo} className="p-logo" />
            </div>
          </div>
          <div className="search-box">
            <input type="search" placeholder="Ne Aramıştınız..." />
            <span className="fa fa-search">
              <BsSearch className="search-icon" />
            </span>
          </div>
          <ol className="account">
            {/* <BsPerson className="icon-account" /> */}
            <li>
              <Account />
              {/* <a className="login">
                Giriş Yap<b className="sign"> veya üye ol</b>
              </a> */}
            </li>
            {/* <BsChevronCompactDown className="icon-down" /> */}

            <li>
              <Basket />
            </li>
          </ol>
          <label for="check" className="bar">
            <span className="bars" id="bars">
              <FaBars />
            </span>
            <span className="times" id="times">
              <FaTimes />
            </span>
          </label>
        </nav>
        <section></section>
      </div>
    </div>
  );
};

export default Header;
