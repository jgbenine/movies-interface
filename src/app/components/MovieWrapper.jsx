import React from 'react'
import styles from '../css/components/CartazSlider.module.scss'
import { Plus } from 'lucide-react'
import Link from 'next/link'

function MovieWrapper({ backgroundImage, title, sinopse, ano, genero }) {
  const stylesBg = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className={styles.movieItem} style={stylesBg} >
      <div className={styles.movieFilter}>
        <article className={`container ${styles.movieContent}`}>
          <h4>{title}</h4>
          <ul className={styles.description}>
            <li>{ano}</li>
            <li>{genero}</li>
          </ul>
          <p>{sinopse}</p>
          <Link href="/filme" className={styles.movieLink}>
            <Plus 
              size={15}
            />
            Mais informações
          </Link>
        </article>
      </div>
    </div>
  )
}

export default MovieWrapper
