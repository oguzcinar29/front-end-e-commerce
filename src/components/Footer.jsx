import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Footer() {
  return (
    <section className="footer">
      <div className="footer-box">
        <div className="img-box img2-box">
          <Link to="/">
            <img src="/images/logo_big.png" alt="logo"></img>
            <h2>SHOPPER</h2>
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/">Company</Link>
          <Link to="/">Products</Link>
          <Link to="/">Offices</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="footer-socialmedia">
          <Link to="https://www.instagram.com/">
            <InstagramIcon />
          </Link>
          <Link to="https://www.pinterest.com/">
            <PinterestIcon />
          </Link>
          <Link to="https://web.whatsapp.com/">
            <WhatsAppIcon />
          </Link>
        </div>
        <hr></hr>
        <footer>&copy; Copyright 2023 - All Rights Reserved</footer>
      </div>
    </section>
  );
}

export default Footer;
