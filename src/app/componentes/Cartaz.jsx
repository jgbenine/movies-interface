import React from 'react'
import styles from '../css/Cartaz.module.scss'

function Cartaz({ backgroundImage, children, titleMovie, sinceFilme, director }) {
  const stylesBg = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className={styles.cartaz} style={stylesBg}>
      <div className={styles.cartazFilter}></div>
      <div className={styles.cartazDescription}>
        <p>Título:
          {titleMovie}
        </p>
        <p>Ano:
          {sinceFilme}
        </p>
        <p>Diretor:
          {director}
        </p>
      </div>
      {children}
    </div>
  )
}

export default Cartaz
