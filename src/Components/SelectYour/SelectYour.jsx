import React from 'react'
import styles from './SelectYour.module.css'


const SelectYour = () => {
  return (
    <div className={styles.selectYour}>
        <div className={styles.container}>
            <div className={ styles.selectTxt}>
            <h1>Select Your New Perfect Style</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime pariatur ea facere dicta, deleniti optio. Iusto fugiat cupiditate esse, inventore temporibus molestiae ad. </p>
            <button>SHOP NOW</button>
            </div>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
        </div>
    </div>
  )
}

export default SelectYour