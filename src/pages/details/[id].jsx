import React, { useEffect } from "react";
import { convertDate } from "@/app/api/utils/utils";
import { useRouter } from "next/router";
import styles from "../../app/css/pages/Details.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TopSection from "@/app/components/TopSection";
import HeadEdit from "@/app/helpers/Head";
import Link from "next/link";
import "../../app/globals.css";
import fetchMain from "@/app/api/axiosConfig";
import ContextApi from "@/app/api/ContextApi";
import { formatRevenue } from "@/app/api/utils/utils";

function Details() {
  const [dataDetails, setDataDetails] = React.useState([]);
  const [revenueInUSD, setRevenueInUSD] = React.useState(null);
  const router = useRouter();
  const { id, type } = router.query;

  useEffect(() => {
    //Fetch Especifico para details
    async function fetchDetails() {
      try {
        if (id && type) {
          let response;
          //Removendo "" do parametro URL
          const typeRemoveQuotes = type.replace(/"/g, "");
          if (typeRemoveQuotes === "movie") {
            response = await fetchMain(`/3/movie/${id}`);
          } else if (typeRemoveQuotes === "tv") {
            response = await fetchMain(`/3/tv/${id}`);
          }
          const data = await response.data;
          setDataDetails(data);
          setRevenueInUSD(formatRevenue(data.revenue));
        }
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    fetchDetails();
  }, [id, type]);

  return (
    <ContextApi>
      {dataDetails ? (
        <>
          <HeadEdit
            titlePage={type === "tv" ? dataDetails.name : dataDetails.title}
            descriptionPage={dataDetails.tagline}
          />
          <Header />
          <section className={styles.details}>
            <div
              className={styles.viewIntro}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${dataDetails.backdrop_path})`,
              }}
            ></div>

            <article
              className={`${styles.detailsContent}`}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${dataDetails.poster_path})`,
              }}
            >
              <h3>{type === "tv" ? dataDetails.name : dataDetails.title}</h3>
              <p className={styles.tagline}>{dataDetails.tagline}</p>
              <div className={styles.genres}>
                {dataDetails.genres?.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
              <ul>
                <li>
                  {type === "tv" ? (
                    <span>
                      <label>Temporadas/Episódios:</label>
                      {dataDetails.number_of_seasons}
                      <span> / </span>
                      {dataDetails.number_of_episodes}
                    </span>
                  ) : (
                    <span>
                      <label>Duração:</label>
                      {dataDetails.runtime} min
                    </span>
                  )}
                </li>
                <li>
                  {type === "tv" ? (
                    <span>
                      <label>Atividade:</label>
                      {dataDetails.in_production === true
                        ? "Em produção"
                        : "Finalizada"}
                    </span>
                  ) : (
                    <span>
                      <label>Receita:</label>
                      {revenueInUSD}
                    </span>
                  )}
                </li>
                <li>
                  <label> Lançamento: </label>
                  {type === "tv" ? (
                    <span>{convertDate(dataDetails.first_air_date)}</span>
                  ) : (
                    <span>{convertDate(dataDetails.release_date)}</span>
                  )}
                </li>
                <li>
                  <label>Nota:</label>
                  {dataDetails.vote_average}
                </li>
                <li>
                  {type === "tv" ? (
                    <span className={styles.linkSerie}>
                      <Link href={`${dataDetails.homepage}`} target="_blank">
                        Assistir
                      </Link>
                    </span>
                  ) : (
                    <span className={styles.imdb}>
                      <Link
                        href={`https://www.imdb.com/title/${dataDetails.imdb_id}`}
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
                {dataDetails.overview}
              </p>
            </article>
            <TopSection />
          </section>
          <Footer />
        </>
      ) : (
        <p>Carregando</p>
      )}
    </ContextApi>
  );
}

export default Details;
