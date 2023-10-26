import React, { useState, useEffect } from "react";
import styles from "../Pages/Navbar.module.css";
import image from "../Pages/Assets/image.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=>{
     const handleResize = () => {
        if(window.innerWidth > 767){
            setIsMenuOpen(false)
        }
     }
     window.addEventListener('resize', handleResize);

     return(()=>{
        window.removeEventListener('resize',handleResize);
     })
  },[window.innerWidth])

  const toggleBtn = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <header className={styles.header}>
    <img src={image} alt="Logo" />
    {
        isMenuOpen &&  
        <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Ambassdor</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    }
    <div className={styles.icon}>
      <i
        class={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
        onClick={toggleBtn}
      ></i>
    </div>
  </header>
  );
};

export default Navbar;


    // <header className={styles.header}>
    //   <img src={image} alt="Logo" />
    //   <nav className={styles.nav}>
    //     <ul>
    //       <li>
    //         <a href="#">Home</a>
    //       </li>
    //       <li>
    //         <a href="#">Ambassdor</a>
    //       </li>
    //       <li>
    //         <a href="#">Contact</a>
    //       </li>
    //       <li>
    //         <a href="#">Login</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className={styles.icon}>
    //     <i
    //       class={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
    //       onClick={toggleBtn}
    //     ></i>
    //   </div>
    // </header>