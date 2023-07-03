import React from 'react'
import styles from '../css/Episode.module.scss'

function Episode({ infoSerie, ImageSerie, altItem }) {
  return (
    <div className={styles.episode}>
      <div className={styles.episodeImg}>
        <img src={ImageSerie} alt={altItem} />
      </div>
      <p className={styles.episodeInfo}>
        {infoSerie}
      </p>
    </div>
  )
}

export default Episode
