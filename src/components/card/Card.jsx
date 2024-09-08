import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Modal from "../modal/Modal";

const Card = ({ resource }) => {
  const [data, setData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch(`https://mais-floripa-server.vercel.app/${resource}`)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, [resource]);

  const handleModal = (item) => {
    setModalData(item);
    setOpenModal(true);
  };

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.content}
          onClick={() => {
            handleModal({
              resource: resource,
              id: item.id,
              title: item.title,
              description: item.description,
              zone: item.zone,
              image: item.image,
              surf: item.surf,
              trail: item.trail,
              map: item.map,
            });
          }}
        >
          <img src={item.image} alt={item.title} className={styles.cardImg} />
          <span className={styles.cardName}>{item.title}</span>
        </div>
      ))}
      {openModal ? <Modal {...modalData} setOpenModal={setOpenModal} /> : null}
    </div>
  );
};

export default Card;
