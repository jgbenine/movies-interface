import React from 'react'
import styles from '../../css/components/CartazSlider.module.scss'
import { Plus } from 'lucide-react'
import Link from 'next/link'


type MovieWrapper = {
  id: number,
  backgroundImage: string,
  title: string,
  sinopse: string,
  ano: string,
  vote: number,
}

export function MovieWrapper({ id, backgroundImage, title, sinopse, ano, vote }: MovieWrapper) {
  const stylesBg = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div className={styles.movieItem} style={stylesBg} >
      <div className={styles.movieFilter}>
        <article className={`containerMain ${styles.movieContent}`}>
          <h4>{title}</h4>
          <ul className={styles.description}>
            <li>Lançamento {ano}</li>
            <li>
              Média {vote}
            </li>
          </ul>
          <p>{sinopse}</p>
          <Link href={`filmes/${id}`} className={styles.movieLink}>
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
