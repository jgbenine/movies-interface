import React from 'react'
import styles from '../css/Episode.module.scss'

function Episode({infoSerie, Image}) {
  const ImageSerie = {
    backgroundImage: `url(${Image})`
  }
  return (
    <div className={styles.episode}>
      <div className={styles.episodeImg} style={ImageSerie}>
          Imagem
      </div>
      <p className={styles.episodeInfo}>
        {infoSerie}
        </p>
    </div>
  )
}

export default Episode
