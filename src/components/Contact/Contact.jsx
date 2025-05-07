import React from "react";

import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";

import styles from "./Contact.module.css";

const Contact = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.field}>
          <BsFillPersonFill size={24} className={styles.icon} />
          <h3 className={styles.name}>{data.name}</h3>
        </div>
        <div className={styles.field}>
          <FaPhone size={20} className={styles.icon} />
          <p className={styles.number}>{data.number}</p>
        </div>
      </div>
      <button type="button" className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
