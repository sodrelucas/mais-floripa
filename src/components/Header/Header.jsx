import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import React, { useState } from "react";

import menu from "../../assets/menu.svg";
import Menu from "../menu/Menu";

export default function index() {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
    console.log(showMenu);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/" className={styles.navLinks}>
          +Floripa
        </Link>
      </h1>
      <img
        className={styles.mobileMenu}
        src={menu}
        alt="Menu Icon"
        onClick={handleOpenMenu}
      />
      <ul className={styles.navList}>
        <li className={styles.navLinks}>
          <Link className={styles.navLinks} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navLinks}>
          <Link className={styles.navLinks} to="/praias">
            Praias
          </Link>
        </li>
        <li className={styles.navLinks}>
          <Link className={styles.navLinks} to="/trilhas">
            Trilhas
          </Link>
        </li>
        <li className={styles.navLinks}>
          <Link className={styles.navLinks} to="/pontos-turisticos">
            P. Turisticos
          </Link>
        </li>
      </ul>
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
    </header>
  );
}
