"use client";
import Novidades from "./components/Novidades";
import Cartaz from "./components/Cartaz";
import SliderDry from "./components/SliderDry";
import TopSection from "./components/TopSection";
import styles from "./css/pages/Home.module.scss";
import HeadEdit from "./helpers/Head";
import fetchMain from "../app/api/axiosConfig";
import { useEffect, useState } from "react";

export default function Home() {
  const [newsMovies, setNewsMovies] = useState([]);

  useEffect(() => {
    async function NewsMovies() {
      try {
        const response = await fetchMain("/3/discover/movie");
        const data = await response.data.results;
        setNewsMovies(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
    NewsMovies();
  }, []);

  return (
    <main>
      <HeadEdit
        titlePage="Home"
        descriptionPage="Melhor informação sobre seu filme."
      />
      <SliderDry />
      <section className={`container ${styles.homeSection}`}>
        <h2 className="title-main">Novos Filmes</h2>
        <p className="description">Selecione um filme da lista</p>
        <div className={styles.homeGrid}>
          {newsMovies?.map((movie) => (
            <Cartaz
              key={movie.id}
              backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              titleMovie={movie.original_title}
              sinceFilme={movie.release_date}
              rate={movie.vote_average}
            />
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
    </main>
  );
}
