import React from "react";
import Modal from "react-modal";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsBasket2, BsChevronCompactDown, BsPerson } from "react-icons/bs";
import product from "../../basket-product.jpg";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement("#root");

const Account = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="account-btn" onClick={openModal}>
        <BsPerson className="icon-account" />
        <p className="login-text">
          Giriş Yap <p className="register-text">veya üye ol</p>
        </p>
        <BsChevronCompactDown className="icon-down" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="account-modal"
        contentLabel="Example Modal"
      >
        <div className="account-area">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            <BsPerson className="modal-icon" />
          </h2>
          <button class="close-account" onClick={closeModal}>
            <AiOutlineClose class="account-close" />
          </button>
          <p className="account-info">Giriş Yapın</p>
          <form className="account-form">
            <input
              className="account-input"
              placeholder="Kullanıcı Adı"
            ></input>
            <input className="password-input" placeholder="Şifre"></input>
            <button className="login-button">Giriş</button>
            <p className="sign-area">
              Üyeliğiniz yoksa buradan{" "}
              <a href="#" className="sign-click">
                Kayıt Ol
              </a>
              <p className="last-text">abilirsiniz</p>
            </p>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Account;
