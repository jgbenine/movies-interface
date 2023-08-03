import React, { useEffect } from "react";
import styles from "../../app/css/pages/Filme.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Play } from "lucide-react";
import TopSection from "@/app/components/TopSection";
import Modal from "@/app/components/Modal";
import HeadEdit from "@/app/helpers/Head";
import "../../app/globals.css";
import { useRouter } from "next/router";
import fetchMain from "@/app/api/axiosConfig";

function Filme() {
  const [isModalOpen, setIsModalOpen] = React.useState(null);
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
          console.log(data)
          
          //Convertendo receita do filme
          const revenueUSD = Number(data.revenue).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
          setRevenueInUSD(revenueUSD);
        } catch (error) {
          console.error("Erro na requisição", error);
        }
      }
      if (id) {
        MovieInfo();
      }
  }, [id]);

  //Funções Modais
  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

   // Função para converter a data para o formato "DD-MM-YYYY"
   function convertDate(date) {
    if (!date) return ""; 
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <HeadEdit
        titlePage="
        Mad Max: Estrada da Fúria"
        descriptionPage="Filme Mad Max: Estrada da Fúria"
      />
      <Header />
      <section className={styles.movie}>
        <div className={styles.viewIntro} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${dataMovie.backdrop_path})`}}></div>
        <article className={`container ${styles.movieContent}`} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w300/${dataMovie.poster_path})`}} >
          <h3>{dataMovie.title}</h3>
          <p className={styles.tagline}>{dataMovie.tagline}</p>
          <ul>
            <li>
              {dataMovie.genres?.map((genre) => (
                <p key={genre.id} className={styles.genre}>
                  {genre.name}  
                </p>
              ))}
            </li>
            <li>{dataMovie.runtime} min</li>
            <li>{revenueInUSD}</li>
            <li>{convertDate(dataMovie.release_date)}</li>
            <li className={styles.movieRating}>
              Nota: {dataMovie.vote_average}
            </li>
            <li className={styles.movieClassification}>
              <p>A16</p>
            </li>
          </ul>
          <p>{dataMovie.overview}</p>
          <button onClick={handleModalOpen}>
            <Play color="#f3f3f3" />
            Assistir Trailer
          </button>
        </article>
        <TopSection />
      </section>
      <Footer />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          titleModal="Assista o trailer:"
          contentModal={
            <iframe
              className="rounded-md shadow-md border border-zinc-400"
              src="https://www.youtube.com/embed/IVmf82obaaA"
              title="YouTube video player"
              allow="accelerometer; autoplay;
                clipboard-write; encrypted-media; gyroscope;
                picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          }
        />
      )}
    </>
  );
}

export default Filme;
