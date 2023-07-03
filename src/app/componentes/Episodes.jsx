import React from 'react'
import styles from '../css/Episodes.module.scss'

function Episodes() {
  return (
    <section className={`container ${styles.episodes}`}>
        <h3 className='title-main'>Novos Episódios</h3>
        <div className={styles.episodesWrapper}>
          <div className={styles.episodesItem}>
              Item
          </div>
        </div>

    </section>
  )
}

export default Episodes
