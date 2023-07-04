import React from 'react'
import styles from '../../app/css/Filme.module.scss'
import Header from '@/app/componentes/Header'
import '../../app/globals.css'

function Filme() {
  return (
    <>
    <Header />
      <section className={styles.filme}>
        <div className={styles.viewIntro}></div>
        <div className='container'>
        teste
        </div>
      </section>
    </>
  )
}

export default Filme
