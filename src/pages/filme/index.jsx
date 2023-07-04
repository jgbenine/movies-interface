import React from 'react'
import styles from '../../app/css/Filme.module.scss'
import Header from '@/app/componentes/Header'
import '../../app/globals.css'
import Footer from '@/app/componentes/Footer'

function Filme() {
  return (
    <>
      <Header />
      <section className={styles.movie}>
        <div className={styles.viewIntro}></div>
        <article className={`container ${styles.movieContent}`}>
          <h3>Mad Max: Estrada da Fúria</h3>
          <ul>
            <li>
              2022
            </li>
            <li>
              Tempo
            </li>
            <li>
              Genero
            </li>
            <li>
              Classificação
            </li>
            <li>
              Rating
            </li>
          </ul>
          <p>
            Em um mundo pós-apocalíptico, Max Rockatansky acredita
            que a melhor forma de sobreviver é não depender de ninguém.
            Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes,
            Max se vê no meio de uma guerra mortal iniciada pela Imperatriz Furiosa,
            que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudá-la.
          </p>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default Filme
