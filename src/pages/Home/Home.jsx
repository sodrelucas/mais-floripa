import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

import { Link } from "react-router-dom";

import Card from "../../components/card/Card";

const Home = () => {
  return (
    <main>
      <Header />
      <div className={styles.list}>
        <h2 className={styles.listTitle}>Praias</h2>

        <Link to="/praias" className={styles.showMore}>
          Ver mais
        </Link>
      </div>
      <section className={styles.cardContainer}>
        <Card resource={"praias"} />
      </section>
      <div className={styles.list}>
        <h2 className={styles.listTitle}>Trilhas</h2>

        <Link to="/trilhas" className={styles.showMore}>
          Ver mais
        </Link>
      </div>
      <section className={styles.cardContainer}>
        <Card resource={"trilhas"} />
      </section>
      <div className={styles.list}>
        <h2 className={styles.listTitle}>Pontos Turisticos</h2>

        <Link to="/pontos-turisticos" className={styles.showMore}>
          Ver mais
        </Link>
      </div>
      <section className={styles.cardContainer}>
        <Card resource={"turismo"} />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
