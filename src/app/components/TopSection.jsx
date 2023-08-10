import React, { useContext } from "react";
import { DataContext } from "../api/ContextApi";
import CartazHorizontal from "./CartazHorizontal";
import Loading from "../components/Loading";
import Link from "next/link";
import styles from "../css/components/TopSection.module.scss";
import "../../app/globals.css";

function TopSection() {
  const { infoTopFiveMovies } = useContext(DataContext);


  return (
    <>
      {infoTopFiveMovies ? (
        <section className={styles.topSection}>
          <div className={`container ${styles.topGrid}`}>
            <h3 className={`title-main`}>Top 5 Filmes</h3>
            <p className="description">
              Seleção dos filmes com melhores avaliações
            </p>
            <div className={styles.topContent}>
              {infoTopFiveMovies.map((topMovie, index) => (
                <Link
                  key={index}
                  href={`/details/${topMovie.id}?type=movie`}
                >
                  <CartazHorizontal
                    ImageHorizontal={`https://image.tmdb.org/t/p/w200${topMovie.backdrop_path}`}
                    infoSerie={topMovie.title}
                    topFilme={index + 1}
                    altItem="Cartaz top filme votado"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default TopSection;
