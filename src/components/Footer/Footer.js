import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; 2020 Coded by
      <a
        className="footer__link"
        href="https://piotr-kuzma.netlify.com/"
        rel="noopener"
        target="_blank"
      >
        Piotr Kuźma
      </a>
    </footer>
  );
};

export default Footer;
