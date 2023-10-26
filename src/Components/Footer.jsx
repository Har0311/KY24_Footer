import React from 'react'
import Contact from './Contact'
import styles from '../Components/Footer.module.css'
import Content from '../Components/Content'

const Footer = () => {
  return (
    <div className={styles.footer}>
       <Contact />
       <Content />
    </div>
  )
}

export default Footer
