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
        <article>
          <label>Título:</label>
          <p>{titleMovie}</p>
        </article>
        <article>
          <label>Ano:</label>
          <p>{sinceFilme}</p>
        </article>
        <article>
          <label>Diretor:</label>
          <p>{director}</p>
        </article>
      </div>
      {children}
    </div>
  )
}

export default Cartaz
