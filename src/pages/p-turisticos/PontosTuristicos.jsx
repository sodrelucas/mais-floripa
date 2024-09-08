import React from "react";

import Header from "../../components/Header/Header";
import Card from "../../components/card/Card";

import styles from "./styles.module.css";
import Footer from "../../components/footer/Footer";

const pTuristicos = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.pageTitle}>Pontos turisticos</h2>
      <main>
        <Card resource={"turismo"} />
      </main>
      <Footer />
    </div>
  );
};

export default pTuristicos;
