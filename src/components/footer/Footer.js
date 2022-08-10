import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import company from "../../akilli.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <h3>Kurumsal</h3>
          <p>Hakkımızda</p>
          <p>Kampanyalar</p>
          <p>Banka Hesap Numaraları</p>
          <p>Blog</p>
          <p>Haberler</p>
        </div>
        <div>
          <h3>Müşteri Hizmetleri</h3>
          <p>Sipariş Sorgulama</p>
          <p>Teslimat ve Kargo</p>
          <p>İade ve Değişim</p>
          <p>Gizlilik ve Güvenlik</p>
        </div>
        <div>
          <h3>Yardım</h3>
          <p>İletişim Bilgileri</p>
          <p>Sıkça Sorulan Sorular</p>
        </div>
        <div>
          <h3>İletişim</h3>
          <p className="adres">
            Adres: <p>1376 Sok. No:1/43 Boran Plaza,Halkapınar Konak/İzmir</p>
          </p>
          <p className="tell">
            Telefon<p>08505555555</p>
          </p>
        </div>
        <div>
          <h3>Bizi Takip Edin</h3>
          <div className="footer-icon">
            <FaFacebookF className="top-icon" />
            <BsTwitter className="top-icon" />
            <BsYoutube className="top-icon" />
            <FaInstagram className="top-icon" />
          </div>
          <p className="follow-info">
            E-Bültene abone olun gelişmeleri kaçırmayın
          </p>
          <input className="e-posta" placeholder="E-Posta Adresiniz"></input>
          <button className="e-icon">
            <GrLinkNext className="next-icon" />
          </button>
        </div>
      </div>
      <div className="copyright-container">
        <p class="copyright">Copyright © 2022 Karma-Kırmızı</p>
        <img src={company} alt="..." />
      </div>
    </div>
  );
};

export default Footer;
