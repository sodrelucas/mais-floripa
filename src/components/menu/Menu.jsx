import { Link } from "react-router-dom";
import React from "react";

import close from "../../assets/close.svg";

import styles from "../menu/styles.module.css";

const Menu = ({ setShowMenu }) => {
  const handleCloseModal = () => {
    setShowMenu(false);
  };

  return (
    <nav className={styles.navContainer}>
      <section className={styles.content}>
        <img
          className={styles.closeBtn}
          src={close}
          alt="Close Icon"
          onClick={handleCloseModal}
        />
        <Link className={styles.menuItems} to="/praias">
          Praias
        </Link>
        <Link className={styles.menuItems} to="/trilhas">
          Trilhas
        </Link>
        <Link className={styles.menuItems} to="/pontos-turisticos">
          Pontos turisticos
        </Link>
      </section>
    </nav>
  );
};

export default Menu;
