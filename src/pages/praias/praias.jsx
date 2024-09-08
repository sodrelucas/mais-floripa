import React from "react";
import Footer from "../../components/footer/Footer";

import Card from "../../components/card/Card";

import Header from "../../components/Header/Header";

import styles from "./styles.module.css";

const praias = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.pageTitle}>Praias</h2>
      <main>
        <Card resource={"praias"} />
      </main>
      <Footer />
    </div>
  );
};

export default praias;
