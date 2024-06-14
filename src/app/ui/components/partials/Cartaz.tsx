import React from 'react'
import { Plus } from 'lucide-react'
import styles from '../../css/components/Cartaz.module.scss'
import Link from 'next/link'

type CartazProps = {
  id: number,
  type?: string,
  backgroundImage: string,
  children?: React.ReactNode,
  titleMovie: string,
  sinceFilme: string,
  rate: number,
}

export function Cartaz({id, type, backgroundImage, children, titleMovie, sinceFilme, rate }: CartazProps) {
  const stylesBg = {
    backgroundImage: `url(${backgroundImage})`,
  }

  console.log
  return (
    <Link href={`${type}/${id}`} className={styles.cartaz} style={stylesBg}>
      <div className={`${styles.cartazFilter} anima-opacity`}>
        <Plus
        color='#f3f3f3a5'
        size={25} 
        />
      </div>
      <div className={styles.cartazDescription}>
        <article className={styles.cartazTitle}>
          <label>Título:</label>
          <p>{titleMovie}</p>
        </article>
        <article>
          <label>Lançamento:</label>
          <p>{sinceFilme}</p>
        </article>
        <article>
          <label>Nota:</label>
          <p>{rate}</p>
        </article>
      </div>
      {children}
    </Link>
  )
}