import React from "react";

import styles from "./styles.module.css";

import Header from "../../components/Header/Header";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

const trilhas = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.pageTitle}>Trilhas</h2>
      <main>
        <Card resource={"trilhas"} />
      </main>
      <Footer />
    </div>
  );
};

export default trilhas;
