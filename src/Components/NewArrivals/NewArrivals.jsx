import React from 'react'
import  styles from './NewArrivals.module.css'

const NewArrivals = () => {
  return (
    <div className={styles.newArrivals}>
        <div className={styles.container}>
            <h1>New Arrivals</h1>
         <div className={styles.arrivalsCards}>
            <div className={ styles.arrivalsCard}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
                <h3>Thermo Ball Etip Gloves</h3>
                <span>$ 45,743</span>
            </div>
            <div className={ styles.arrivalsCard}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
                <h3>Thermo Ball Etip Gloves</h3>
                <span>$ 45,743</span>
            </div>
            <div className={ styles.arrivalsCard}>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
                <h3>Thermo Ball Etip Gloves</h3>
                <span>$ 45,743</span>
            </div>

         </div>
        </div>

    </div>
  )
}

export default NewArrivals