import React from 'react'
import styles from '../css/CartazSlider.module.scss'

function MovieWrapper({backgroundImage, title, sinopse, ano }) {
  const stylesBg = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className={styles.movieItem} style={stylesBg} >
      <h4>{title}</h4>
      <ul className={movie.description}>
        <li>{genero}</li>
        <li>{ano}</li>
      </ul>
      <p>{sinopse}</p>
      <button>Mais informações</button>
    </div>
  )
}

export default MovieWrapper
