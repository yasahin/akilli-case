import React from "react";
import Modal from "react-modal";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import product from "../../basket-product.jpg";
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "10%",
    left: "100%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Basket = () => {
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
      <button className="open-modal" onClick={openModal}>
        <FaShoppingCart className="icon-basket" />
        Sepet 0.00TL
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          <BsBasket2 className="sepet" />
        </h2>
        <button class="close" onClick={closeModal}>
          <AiOutlineClose class="close-icon" />
        </button>
        <div className="basket-products">Sepetinizdeki Ürünler</div>
        <form>
          <img className="basket-img" src={product} alt="..." />
          <p className="basket-text">Beko BM 5015 B Bulaşık Makinesi</p>
          <p className="basket-price">6.668.24 TL</p>
          <p className="basket-hire">
            Taksitli Fiyat : <p className="basket-end">3x2.326,84 TL</p>
          </p>
          <button className="button-danger">Sepetten Çıkar</button>
          <button className="button-success">Alışverişi Tamamla</button>
        </form>
      </Modal>
    </div>
  );
};

export default Basket;
