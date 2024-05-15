import { faBasketShopping, faHamburger, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
         <div className={styles.container}>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Latest</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.headerIcns}>
                <FontAwesomeIcon className={styles.icn} icon = {faSearch}/>
                <FontAwesomeIcon className={styles.icn}  icon ={faPerson}/>
                <FontAwesomeIcon className={styles.icn} icon ={faBasketShopping}/>
            </div>
            <div className={styles.menu}>
              <FontAwesomeIcon icon ={faHamburger}/>
            </div>
         </div>
    </header>
  )
}

export default Header