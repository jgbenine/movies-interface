import React, { useContext } from "react";
import { DataContext } from "../../../data/hooks/ContextApi";
import CartazHorizontal from "../partials/CartazHorizontal";
import Loading from "../partials/Loading";
import Link from "next/link";
import styles from "../../css/components/TopSection.module.scss";
import IntroSection from "./IntroSection";

function TopSection() {
  const { infoTopFiveMovies } = useContext(DataContext);

  return (
    <>
      {infoTopFiveMovies ? (
        <section className={styles.topSection}>
          <div className={`container ${styles.topGrid}`}>
          <IntroSection
              titleSection="Aclamados pela crítica"
              descriptionSection="Seleção dos melhores avaliados."
            />
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
