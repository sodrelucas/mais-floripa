import React, { useState } from "react";

import styles from "./styles.module.css";

import surfOff from "../../assets/surfOff.svg";
import hikingOff from "../../assets/hikingOff.svg";
import surfOn from "../../assets/surfOn.svg";
import hikingOn from "../../assets/hikingOn.svg";
import closeIcon from "../../assets/close.svg";

const Modal = ({
  resource,
  title,
  description,
  image,
  surf,
  trail,
  zone,
  map,
  setOpenModal,
}) => {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.controlModal}>
          <img src={closeIcon} alt="Close icon" onClick={handleCloseModal} />
        </div>
        <div className={styles.mainContent}>
          <img src={image} alt={title} className={styles.placeImg} />
          <div>
            <div className={styles.header}>
              <div>
                <h2 className={styles.placeTitle}>{title}</h2>
                <p className={styles.zone}>{zone}</p>
              </div>
              {resource == "praias" && (
                <div className={styles.headerIcons}>
                  {surf ? (
                    <img src={surfOn} alt="Surf On" />
                  ) : (
                    <img src={surfOff} alt="Surf Of" />
                  )}
                  {trail ? (
                    <img src={hikingOn} alt="hiking on" />
                  ) : (
                    <img src={hikingOff} alt="hiking off" />
                  )}
                </div>
              )}
            </div>
            <p className={styles.placeDesc}>{description}</p>
            <h2>Como chegar</h2>
            <iframe src={map} className={styles.map}></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Modal;
