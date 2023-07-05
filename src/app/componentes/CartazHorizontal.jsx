import React from 'react'
import styles from '../css/CartazHorizontal.module.scss'
import { PlusCircle } from 'lucide-react'

function CartazHorizontal({ infoSerie, ImageSerie, altItem }) {
  return (
    <div className={styles.cartazHorizontal}>
      <div className={styles.episodeImg}>
        <img src={ImageSerie} alt={altItem} />
        <span className={styles.filter}>
          <PlusCircle color='#f3f3f3a5' size={30} />
        </span>
      </div>
      <p className={styles.episodeInfo}>
        {infoSerie}
      </p>
    </div>
  )
}

export default CartazHorizontal
