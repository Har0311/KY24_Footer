import React from 'react'
import styles from '../Pages/Content.module.css'

const Content = (props) => {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            {
                props.data.map((item,idx)=>(
                    <div key={idx}>
                        <img src={item.image} alt="logo1" />
                        <h3>{item.text}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Content
