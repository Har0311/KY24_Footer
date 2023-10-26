import React from 'react'
import styles from '../Components/Content.module.css'
import logo from '../Components/Assets/image.png'
import img1 from '../Components/Assets/Group 7200.png'
import img2 from '../Components/Assets/Group 7205.png'
import img3 from '../Components/Assets/Group 7206.png'
import img4 from '../Components/Assets/Group 7207.png'
import img5 from '../Components/Assets/Rectangle 13.png'
import img6 from '../Components/Assets/Group 170.png'

const Content = () => {
  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <div className={styles.heading}>
                <h1>Feel Free To Contact Us. </h1>
                <h3>If you have any questions or concerns, please don't hesitate to contact us at your convenience.</h3>
            </div>
            <div className={styles.details}>
                <div>
                    <h3>lorem Ipsum Dolor</h3>
                    <h3>7870843912</h3>
                </div>
                <div>
                    <h3>lorem Ipsum Dolor</h3>
                    <h3>7870843912</h3>
                </div>
                <div>
                    <h3>lorem Ipsum Dolor</h3>
                    <h3>7870843912</h3>
                </div>
            </div>
        </div>
        <div className={styles.info}>
            <div className={styles.links}>
                <img src={logo} alt="LOGO" />
                <table>
                    <tr>
                        <th><a href="#">Home</a></th>
                        <th><a href="#">Features</a></th>
                    </tr>
                    <tr>
                        <td><a href="#">Brownie Points</a></td>
                        <td><a href="#">Terms and Conditions</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Become CA</a></td>
                        <td><a href="#">Privacy and Policy</a></td>
                    </tr>
                </table>
                <ul>
                    <li><a href="#"><img src={img1} alt="" /></a></li>
                    <li><a href="#"><img src={img2} alt="" /></a></li>
                    <li><a href="#"><img src={img3} alt="" /></a></li>
                    <li><a href="#"><img src={img4} alt="" /></a></li>
                </ul>
            </div>
            <div className={styles.video}>
                <img src={img5} alt="Hero" />
                <img className={styles.btn} src={img6} alt="Button" />
            </div>
        </div>
    </div>
  )
}

export default Content
