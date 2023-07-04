import React from 'react'
import styles from '../../app/css/Filme.module.scss'
import Header from '@/app/componentes/Header'
import '../../app/globals.css'
import Footer from '@/app/componentes/Footer'
import { Star, Play } from 'lucide-react'

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
                2015
              </li>
              <li>
                120 Min
              </li>
              <li>
                Ação /
                Ficção Científica
              </li>
              <li>
                US$ 150 milhões
              </li>
              <li className={styles.movieRating}>
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
              </li>
              <li className={styles.movieClassification}>
                <p>A16</p>
              </li>
            </ul>
            <p>
              Em um mundo pós-apocalíptico, Max Rockatansky acredita
              que a melhor forma de sobreviver é não depender de ninguém.
              Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes,
              Max se vê no meio de uma guerra mortal iniciada pela Imperatriz Furiosa,
              que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudá-la.
            </p>

            {/* <div className={styles.movieDirector}>
            Diretor: 
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/George_Miller_%2835706244922%29.jpg" alt=""  style={{width: '55px', height: '42px'}}/>
          </div> */}
            <button>
              <Play color='#f3f3f3' />
              Assistir Trailer
            </button>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default Filme
