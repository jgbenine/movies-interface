// import Header from "@/app/ui/components/navigation/Header";
// import Footer from "../../app/ui/components/navigation/Footer";
// import TopSection from "@/app/ui/components/sections/TopSection";
import HeadEdit from "../../app/ui/components/helpers/Head";
import Header from "../../app/ui/components/navigation/Header";
import Link from "next/link";
import styles from "../../app/ui/css/pages/Details.module.scss";
import { formatRevenue, convertDate } from "../../app/data/utils/utils";
import Footer from "../../app/ui/components/navigation/Footer";
import { Novidades } from "../../app/ui/components/sections/Novidades";
import { TopSection } from "../../app/ui/components/sections/TopSection";


export function Details({ data, type }) {

  return (
    <>
      <HeadEdit
        titlePage={type === "series" ? data.name : data.title}
        descriptionPage={data.tagline}
      />
      <section className={styles.details}>
        <div
          className={styles.viewIntro}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
          }}
        ></div>
        <article
          className={`${styles.detailsContent}`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300/${data.poster_path})`,
          }}
        >
          <h3>{type === "series" ? data.name : data.title}</h3>
          <p className={styles.tagline}>{data.tagline}</p>
          <div className={styles.genres}>
            {data.genres?.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <ul>
            <li>
              {type === "series" ? (
                <span>
                  <label>Temporadas/Episódios:</label>
                  {data.number_of_seasons}
                  <span> / </span>
                  {data.number_of_episodes}
                </span>
              ) : (
                <span>
                  <label>Duração:</label>
                  {data.runtime} min
                </span>
              )}
            </li>
            <li>
              {type === "series" ? (
                <span>
                  <label>Atividade:</label>
                  {data.in_production === true
                    ? "Em produção"
                    : "Finalizada"}
                </span>
              ) : (
                <span>
                  <label>Receita:</label>
                  {formatRevenue(data.revenue)}
                </span>
              )}
            </li>
            <li>
              <label> Lançamento: </label>
              {type === "series" ? (
                <span>{convertDate(data.first_air_date)}</span>
              ) : (
                <span>{convertDate(data.release_date)}</span>
              )}
            </li>
            <li>
              <label>Nota:</label>
              {data.vote_average}
            </li>
            <li>
              {type === "series" ? (
                <span className={styles.linkSerie}>
                  <Link href={`${data.homepage}`} target="_blank">
                    Assistir
                  </Link>
                </span>
              ) : (
                <span className={styles.imdb}>
                  <Link
                    href={`https://www.imdb.com/title/${data.imdb_id}`}
                    target="_blank"
                  >
                    IMDb
                  </Link>
                </span>
              )}
            </li>
          </ul>
          <p>
            <label>Sinopse:</label>
            {data.overview}
          </p>
        </article>
        {/* {type === "tv" ? <Novidades /> : <TopSection results={data} />} */}
      </section>
    </>
  );
}