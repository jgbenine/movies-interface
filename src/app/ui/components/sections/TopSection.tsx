import { CartazHorizontal } from "../partials/CartazHorizontal";
import styles from "../../css/components/TopSection.module.scss";
import { IntroSection } from "./IntroSection";
import { getTopFiveMovies } from "../../../data/api/routes/routes";

type TopMoviesProps = {
    id: number;
    title: string;
    backdrop_path: string;
}

export async function TopSection() {
  const topMovies = await getTopFiveMovies();

  return (
    <section className={styles.topSection}>
      <div className={styles.topGrid}>
        <IntroSection
          titleSection="Aclamados pela crítica"
          descriptionSection="Seleção dos melhores avaliados."
          linkHrefSection=""
        />
        <div className={styles.topContent}>
          {topMovies.map((topMovie:TopMoviesProps , index: number) => (
            <CartazHorizontal
              key={topMovie.id}
              ImageHorizontal={`https://image.tmdb.org/t/p/original/${topMovie.backdrop_path}`}
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


