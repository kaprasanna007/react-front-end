import React from "react";
import "../styles.css";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">@ {currentYear} copy right all reserved </p>
    </footer>
  );
}
export default Footer;
