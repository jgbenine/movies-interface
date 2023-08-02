import React, { useEffect } from "react";
import styles from "../../app/css/pages/Filme.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Star, Play } from "lucide-react";
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

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (id) {
      async function MovieInfo() {
        try {
          const response = await fetchMain(`/3/movie/${id}`);
          const data = await response.data;
          setDataMovie(data);
          
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
      MovieInfo();
    }
  }, [id]);

  return (
    <>
      <HeadEdit
        titlePage="
        Mad Max: Estrada da Fúria"
        descriptionPage="Filme Mad Max: Estrada da Fúria"
      />
      <Header />
      <section className={styles.movie}>
        <div className={styles.viewIntro}></div>
        <article className={`container ${styles.movieContent}`}>
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
            <li>{dataMovie.release_date}</li>
            <li className={styles.movieRating}>
              <Star size={15} />
              <Star size={15} />
              <Star size={15} />
              <Star size={15} />
              <Star size={15} />
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
