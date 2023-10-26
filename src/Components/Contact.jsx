import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Contact.module.css";

const Contact = () => {
  const red = ["CONTACT US", "CONTACT US", "CONTACT US","CONTACT US","CONTACT US","CONTACT US"];
  return (
    <div className={styles.main}>
      <Marquee speed={60} gradient={false} pauseOnHover>
          <div className={styles.text1}>
            <h1>CONTACT US</h1>
          </div>
          <div className={styles.text2}>
            <h1>CONTACT US</h1>
          </div>
          <div className={styles.text1}>
            <h1>CONTACT US</h1>
          </div>
          <div className={styles.text2}>
            <h1>CONTACT US</h1>
          </div>
          <div className={styles.text1}>
            <h1>CONTACT US</h1>
          </div>
          <div className={styles.text2}>
            <h1>CONTACT US</h1>
          </div>
      </Marquee>
    </div>
  );
};

export default Contact;
