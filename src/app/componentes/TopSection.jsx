import React from 'react'
import '../../app/globals.css'
import styles from '../css/TopSection.module.scss'
import CartazHorizontal from './CartazHorizontal'

function TopSection() {
  return (
    <section className={styles.topSection}>
      <div className={`container ${styles.topGrid}`}>
        <h3 className={`title-main ${styles.topTitle}`}>Top 5 Filmes do mês</h3>
        <p class="description">Seleção dos filmes com melhores avaliações</p>
        <div className={styles.topContent}>
          <CartazHorizontal
            ImageHorizontal={"/assets/cartaz-img1.jpg"}
            infoSerie="Joker"
            topFilme="1"
          />
          <CartazHorizontal
            ImageHorizontal={"/assets/cartaz-img2.jpg"}
            infoSerie="Pulp Fiction"
            topFilme="2"
          />
          <CartazHorizontal
            ImageHorizontal={"/assets/cartaz-img12.jpg"}
            infoSerie="Sniper Americano"
            topFilme="3"
          />
          <CartazHorizontal
            ImageHorizontal={"/assets/cartaz-img6.jpg"}
            infoSerie="Interstelar"
            topFilme="4"
          />
          <CartazHorizontal
            ImageHorizontal={"/assets/cartaz-img7.jpg"}
            infoSerie="Constantine"
            topFilme="5"
          />
        </div>
      </div>
    </section>
  )
}

export default TopSection
