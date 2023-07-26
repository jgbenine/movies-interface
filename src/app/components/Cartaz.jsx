import React from 'react'
import {Plus} from 'lucide-react'
import styles from '../css/components/Cartaz.module.scss'
import Link from 'next/link'

function Cartaz({ backgroundImage, children, titleMovie, sinceFilme, director }) {
  const stylesBg = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <Link href="/filme" className={styles.cartaz} style={stylesBg}>
      <div className={`${styles.cartazFilter} anima-opacity`}>
        <Plus 
        className={styles.cartazFilterIcon}
        color='#f3f3f3a5'
        size={35} 
        />
      </div>
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
    </Link>
  )
}

export default Cartaz
