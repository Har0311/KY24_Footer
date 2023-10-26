import React from "react";
import styles from "./BrowniePoints.module.css";
import Marquee from "react-fast-marquee";
import img1 from '../Pages/Assets/Layer_1.png'
import img2 from '../Pages/Assets/Layer_1 (1).png'
import img3 from '../Pages/Assets/Layer_1 (2).png'
import img4 from '../Pages/Assets/Layer_1 (3).png'
import img5 from '../Pages/Assets/Layer_1 (4).png'
import Content from "./Content";

const BrowniePoints = () => {

  const data = [
    {
        image:img1,
        text : 'Event Passes'
    },
    {
        image:img2,
        text : 'Prizes'
    },
    {
        image:img3,
        text : 'Certificates'
    },
    {
        image:img4,
        text : 'Celebrity Meets'
    },
    {
        image:img5,
        text : 'Merchandise'
    }
  ]

  return (
    <div className={styles.box}>
      <div className={styles.main}>
        <Marquee speed={60} gradient={false} pauseOnHover>
          <div className={styles.text1}>
            <h1>BROWNIE POINTS</h1>
          </div>
          <div className={styles.text2}>
            <h1>BROWNIE POINTS</h1>
          </div>
          <div className={styles.text1}>
            <h1>BROWNIE POINTS</h1>
          </div>
          <div className={styles.text2}>
            <h1>BROWNIE POINTS</h1>
          </div>
          <div className={styles.text1}>
            <h1>BROWNIE POINTS</h1>
          </div>
          <div className={styles.text2}>
            <h1>BROWNIE POINTS</h1>
          </div>
        </Marquee>
      </div>
      <Content data={data} />
    </div>
  );
};

export default BrowniePoints;
