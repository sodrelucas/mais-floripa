import React from "react";
import { Link } from "react-router-dom";

import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerIcons}>
        <Link to="/" className={styles.logoFooter}>
          <h2>+Floripa</h2>
        </Link>
        <div>
          <a
            className={styles.icons}
            target="_blank"
            href="https://www.linkedin.com/in/sodre-lucas/"
          >
            <FaLinkedin className={styles.linkedinIcon} />
          </a>
          <a
            className={styles.icons}
            target="_blank"
            href="https://web.whatsapp.com/send?phone=5548988244208"
          >
            <FaWhatsappSquare className={styles.whatsappIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
