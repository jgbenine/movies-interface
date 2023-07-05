import React from 'react'
import styles from '../css/CartazHorizontal.module.scss'
import { PlusCircle } from 'lucide-react'

function CartazHorizontal({ infoSerie, ImageHorizontal, altItem, topFilme }) {
  return (
    <div className={styles.cartazHorizontal}>
      <div className={styles.horizontalImg}>
        <img src={ImageHorizontal} alt={altItem} />
        <span className={styles.filter}>
          <PlusCircle color='#f3f3f3a5' size={30} />
          <p className={styles.topFilme}>{topFilme}</p>
        </span>
      </div>
      <p className={styles.horizontalInfo}>
        {infoSerie}
      </p>
    </div>
  )
}

export default CartazHorizontal
