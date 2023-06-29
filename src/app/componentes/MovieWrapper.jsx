import React from 'react'
import styles from '../css/CartazSlider.module.scss'
import { Plus } from 'lucide-react'

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
          <button>
            <Plus 
              size={15}
            />
            Mais informações
          </button>
        </article>
      </div>
    </div>
  )
}

export default MovieWrapper
