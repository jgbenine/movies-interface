"use client";
import Novidades from "./components/Novidades";
import Cartaz from "./components/Cartaz";
import SliderDry from "./components/SliderDry";
import TopSection from "./components/TopSection";
import styles from "./css/pages/Home.module.scss";
import HeadEdit from "./helpers/Head";

export default function Home() {
  return (
    <main>
      <HeadEdit
        titlePage="Home"
        descriptionPage="Melhor informação sobre seu filme."
      />
      <SliderDry />
      <section className={`container ${styles.homeSection}`}>
        <h2 className="title-main">Filmes Disponíveis</h2>
        <p className="description">Selecione um filme da lista</p>
        <div className={styles.homeGrid}>
          <Cartaz
            backgroundImage="/assets/cartaz-img1.jpg"
            titleMovie="Joker"
            sinceFilme="2022"
            director="Todd"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img2.jpg"
            titleMovie="Pulp Fiction"
            sinceFilme="1994"
            director="Quentin Tarantino"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img3.jpg"
            titleMovie="Django Livre"
            sinceFilme="2012"
            director="Quentin Tarantino"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img4.jpg"
            titleMovie="Ilha do Medo"
            sinceFilme="2010"
            director="Martin Scorsese"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img5.jpg"
            titleMovie="Clube da Luta"
            sinceFilme="1999"
            director="David Fincher"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img6.jpg"
            titleMovie="Interstellar"
            sinceFilme="2014"
            director="Christopher Nolan"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img7.jpg"
            titleMovie="Constantine"
            sinceFilme="2005"
            director="Francis Lawrence"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img8.jpg"
            titleMovie="Watchmen"
            sinceFilme="2009"
            director="Zack Snyder"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img9.jpg"
            titleMovie="Matrix"
            sinceFilme="1999"
            director="Lana Wachowski"
          />
          <Cartaz
            backgroundImage="/assets/cartaz-img11.jpg"
            titleMovie="Mad Max"
            sinceFilme="2015"
            director="George Miller"
          />
        </div>
      </section>
      <section className={styles.homeWrapperSlider}>
        <div className="container">
          <Novidades />
        </div>
      </section>

      <section>
        <TopSection />
      </section>
    </main>
  );
}
