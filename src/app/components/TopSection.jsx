import React, { useEffect } from "react";
import "../../app/globals.css";
import styles from "../css/components/TopSection.module.scss";
import CartazHorizontal from "./CartazHorizontal";
import fetchMain from "../api/axiosConfig";
import Link from "next/link";

function TopSection() {
  const [topMovies, setTopMovies] = React.useState([]);

  useEffect(() => {
    async function topMovies() {
      try {
        const response = await fetchMain("/3/movie/top_rated");
        const data = await response.data.results;
        const firstFiveResults = response.data.results.slice(0, 5);
        setTopMovies(firstFiveResults);
      } catch (error) {
        console.error("Erro requisição TopFilmes", error);
      }
    }

    topMovies();
  }, []);

  return (
    <section className={styles.topSection}>
      <div className={`container ${styles.topGrid}`}>
        <h3 className={`title-main`}>Top 5 melhores avaliados</h3>
        <p className="description">
          Seleção dos filmes com melhores avaliações
        </p>
        <div className={styles.topContent}>
          {topMovies.map((topMovie, index) => (
            <Link key={topMovie.id} href={`/details/${topMovie.id}?type=movie`}>
              <CartazHorizontal
                ImageHorizontal={`https:/image.tmdb.org/t/p/w200${topMovie.backdrop_path}`}
                infoSerie={topMovie.title}
                topFilme={index + 1}
                altItem="Cartaz top filme votado"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSection;
