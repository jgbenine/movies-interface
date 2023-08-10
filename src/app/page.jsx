'use client'
import { convertDate } from "./api/utils/utils";
import { DataContext } from "./api/ContextApi";
import { useContext } from "react";
import Novidades from "./components/Novidades";
import Cartaz from "./components/Cartaz";
import SliderDry from "./components/SliderDry";
import TopSection from "./components/TopSection";
import styles from "./css/pages/Home.module.scss";
import HeadEdit from "./helpers/Head";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const { infoNewsMovies } = useContext(DataContext);
  return (
    <>
      {infoNewsMovies ? (
        <>
          <HeadEdit
            titlePage="Home"
            descriptionPage="Melhor informação sobre seu filme."
          />
            <Header />
          <SliderDry />
          <section className={`container ${styles.homeSection}`}>
            <h2 className="title-main">Filmes Populares</h2>
            <p className="description">Selecione um filme da lista</p>
            <div className={styles.homeGrid}>
              {infoNewsMovies?.map((movie) => (
                <Link key={movie.id} href={`/details/${movie.id}?type=movie`}>
                  <Cartaz
                    backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    titleMovie={movie.original_title}
                    sinceFilme={convertDate(movie.release_date)}
                    rate={movie.vote_average}
                  />
                </Link>
              ))}
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
        </>
      ) : (
        <p>Carregando</p>
      )}
      <Footer />
    </>
  );
}
