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

function Filme() {
  const [dataMovie, setDataMovie] = React.useState([]);
  const [revenueInUSD, setRevenueInUSD] = React.useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function MovieInfo() {
      try {
        const response = await fetchMain(`/3/movie/${id}`);
        const data = await response.data;
        setDataMovie(data);
        
        //Convertendo receita do filme
        const revenueUSD = Number(data.revenue).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
        setRevenueInUSD(revenueUSD);
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    if (id) {
      MovieInfo();
    }
  }, [id]);

  // Função para converter a data para o formato "DD-MM-YYYY"
  function convertDate(date) {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <HeadEdit
        titlePage={dataMovie.title}
        descriptionPage={dataMovie.tagline}
      />
      <Header />
      <section className={styles.movie}>
        <div
          className={styles.viewIntro}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${dataMovie.backdrop_path})`,
          }}
        ></div>

        <article
          className={`${styles.movieContent}`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300/${dataMovie.poster_path})`,
          }}
        >
          <h3>{dataMovie.title}</h3>
          <p className={styles.tagline}>{dataMovie.tagline}</p>
          <div className={styles.genres}>
            {dataMovie.genres?.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <ul>
            <li>
              <label>Duração:</label>
              {dataMovie.runtime} min
            </li>
            <li>
              <label>Receita:</label>
              {revenueInUSD}
            </li>
            <li>
              <label>Lançamento:</label>
              {convertDate(dataMovie.release_date)}
            </li>
            <li>
              <label>Nota:</label>
              {dataMovie.vote_average}
            </li>
            <li className={styles.imdb}>
              <Link href={`https://www.imdb.com/title/${dataMovie.imdb_id}`} target="_blank">IMDb</Link>
            </li>
          </ul>
          <p>
            <label>Sinopse:</label>
            {dataMovie.overview}
          </p>
        </article>
        <TopSection />
      </section>
      <Footer />
    </>
  );
}

export default Filme;
