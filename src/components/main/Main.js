import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper";
import logo from "../../logo.png";
import makine from "../../product.jpeg";

import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { fetchCategories, fetchProducts, login } from "../../helpers/fetchData";

import "./Main.css";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};

const Main = () => {
  const [token, setToken] = useState();

  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  const [renderList, setRenderList] = useState();

  //! FILTERED  ISTENIRSE

  useEffect(() => {
    const filtered = products.filter((item) => {
      return item.name.includes(selectedCategory);
    });
    console.log("filtered :" + filtered);
  }, [selectedCategory]);

  console.log(token);

  useEffect(() => {
    const filtered = products.filter((item) => {
      return item.categoryName === selectedCategory;
    });
    setRenderList(filtered);
  }, [selectedCategory, products]);

  useEffect(() => {
    login().then((res) => {
      res.json().then((r) => {
        setToken(r.data.token);
      });
    });
  }, []);

  useEffect(() => {
    fetchProducts(1, token).then((res) => {
      res.json().then((r) => {
        setProducts(r.data);
      });
    });
  }, [token]);
  console.log("selectedCategory:" + selectedCategory);

  useEffect(() => {
    fetchCategories(1, token).then((cat) => {
      cat.json().then((cat) => {
        setCategory(cat.data);
      });
    });
  }, [token]);

  console.log("Category: " + category);

  return (
    <div className="main">
      <div className="main-menu">
        <div className="all-btn">
          {category.map((item) => {
            return (
              <button
                onClick={() => {
                  setSelectedCategory(item.categoryName);
                }}
                className="list-btn"
              >
                {item.categoryName}
              </button>
            );
          })}
        </div>
      </div>
      <div className="list-info">
        <p>Anasayfa</p>
        <BsChevronRight className="left-icon" />
        <p className="list-state">{selectedCategory}</p>
      </div>
      <div className="product-list">
        <p className="category">
          {selectedCategory}
          <p className="category-info">
            kategorisi içindeki ürünler listeleniyor
          </p>
        </p>
      </div>
      <div className="dropdown-cards">
        <p className="dropdown-info">
          <p className="dropdown-text">En son eklenenlere göre</p>
          <BsChevronDown className="icon-down2" />
        </p>
        <p className="dropdown-info">
          <p className="dropdown-text">Tüm ürünler</p>
          <BsChevronDown className="icon-down2" />
        </p>
        <RiLayoutGridFill className="grid-icon1" />
        <FaThList className="grid-icon2" />
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((item) => {
            return (
              <div key={item.key}>
                <SwiperSlide>
                  <div className="all-cards">
                    <div className="card-area">
                      <img src={makine} alt="..." className="product-image" />
                      <p className="product-info">{item.name}</p>
                      <p className="product-price">{item.price} TL</p>
                      <p className="hire">
                        Taksitli Fiyat :
                        <p className="hire-price">3x2.326,84 TL</p>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
          console.log(id.name) return (
          <SwiperSlide>
            <div className="all-cards">
              <div className="card-area">
                <img src={makine} alt="..." className="product-image" />
                <p className="product-info"></p>
                <p className="product-price">6.668.24 TL</p>
                <p className="hire">
                  Taksitli Fiyat :<p className="hire-price">3x2.326,84 TL</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
          );
          <SwiperSlide>
            <div className="all-cards">
              <div className="card-area">
                <img src={makine} alt="..." className="product-image" />
                <p className="product-info">Beko BM 5015 B Bulaşık Makinesi</p>
                <p className="product-price">6.668.24 TL</p>
                <p className="hire">
                  Taksitli Fiyat : <p className="hire-price">3x2.326,84 TL</p>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="number">
        <p className="number-area">
          <p className="dif-number">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </p>
      </div>
    </div>
  );
};

export default Main;
