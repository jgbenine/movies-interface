import React, { useEffect } from "react";
import styles from "../../app/css/pages/Filme.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TopSection from "@/app/components/TopSection";
import HeadEdit from "@/app/helpers/Head";
import Link from "next/link";
import "../../app/globals.css";
import { useRouter } from "next/router";
import fetchMain from "@/app/api/axiosConfig";
import { convertDate } from "@/app/api/utils/utils";

function Details() {
  const [dataDetails, setDataDetails] = React.useState([]);
  const [revenueInUSD, setRevenueInUSD] = React.useState(null);
  const router = useRouter();
  const { id, type } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        if (id && type) {
          let response;

          //Removendo as "" do parametro URL
          const typeRemoveQuotes = type.replace(/"/g, "");

          if (typeRemoveQuotes === "movie") {
            response = await fetchMain(`/3/movie/${id}`);
            console.log(data)
          } else if (typeRemoveQuotes === "tv") {
            response = await fetchMain(`/3/tv/${id}`);
            console.log(response)
          }
          const data = await response.data;
          setDataDetails(data);

          //Convertendo receita do filme
          const revenueUSD = Number(data.revenue).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          setRevenueInUSD(revenueUSD);
        }
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }

    fetchData();
  }, [id, type]);

  return (
    <>
      <HeadEdit
        titlePage={dataDetails.title}
        descriptionPage={dataDetails.tagline}
      />
      <Header />
      <section className={styles.movie}>
        <div
          className={styles.viewIntro}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${dataDetails.backdrop_path})`,
          }}
        ></div>

        <article
          className={`${styles.movieContent}`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300/${dataDetails.poster_path})`,
          }}
        >
          <h3>{dataDetails.title}</h3>
          <p className={styles.tagline}>{dataDetails.tagline}</p>
          <div className={styles.genres}>
            {dataDetails.genres?.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <ul>
            <li>
              <label>Duração:</label>
              {dataDetails.runtime} min
            </li>
            <li>
              <label>Receita:</label>
              {revenueInUSD}
            </li>
            <li>
              <label>Lançamento:</label>
              {convertDate(dataDetails.release_date)}
            </li>
            <li>
              <label>Nota:</label>
              {dataDetails.vote_average}
            </li>
            <li className={styles.imdb}>
              <Link
                href={`https://www.imdb.com/title/${dataDetails.imdb_id}`}
                target="_blank"
              >
                IMDb
              </Link>
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
  );
}

export default Details;
