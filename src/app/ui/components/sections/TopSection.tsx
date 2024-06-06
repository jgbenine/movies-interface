import { CartazHorizontal } from "../partials/CartazHorizontal";
import Loading from "../partials/Loading";
import Link from "next/link";
import styles from "../../css/components/TopSection.module.scss";
import { IntroSection } from "./IntroSection";


type TopMoviesProps = {
  results: {
    id: number;
    title: string;
    backdrop_path: string;
  }[]
}

export function TopSection({ results }: TopMoviesProps) {

  return (
    <section className={styles.topSection}>
      <div className={styles.topGrid}>
        {/* <IntroSection
          titleSection="Aclamados pela crítica"
          descriptionSection="Seleção dos melhores avaliados."
        /> */}
        <div className={styles.topContent}>
          {results.map((topMovie, index: number) => (
            <CartazHorizontal
              key={topMovie.id}
              ImageHorizontal={`https://image.tmdb.org/t/p/w200${topMovie.backdrop_path}`}
              infoSerie={topMovie.title}
              topFilme={index + 1}
              altItem="Cartaz top filme votado"
            />
          ))}
        </div>
      </div>
    </section>
  );
}


