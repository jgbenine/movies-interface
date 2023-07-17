import React, { useEffect } from "react";
import styles from "../../app/css/Filme.module.scss";
import Header from "@/app/componentes/Header";
import "../../app/globals.css";
import Footer from "@/app/componentes/Footer";
import { Star, Play } from "lucide-react";
import TopSection from "@/app/componentes/TopSection";
import Modal from "@/app/componentes/Modal";
import HeadEdit from "@/app/helpers/Head";

function Filme() {
  const [isModalOpen, setIsModalOpen] = React.useState(null);

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
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
        <div className={styles.viewIntro}></div>
        <article className={`container ${styles.movieContent}`}>
          <h3>Mad Max: Estrada da Fúria</h3>
          <ul>
            <li>2015</li>
            <li>120 Min</li>
            <li>Ação / Ficção Científica</li>
            <li> US$ 150 milhões</li>
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
          <p>
            Em um mundo pós-apocalíptico, Max Rockatansky acredita que a melhor
            forma de sobreviver é não depender de ninguém. Porém, após ser
            capturado pelo tirano Immortan Joe e seus rebeldes, Max se vê no
            meio de uma guerra mortal iniciada pela Imperatriz Furiosa, que
            tenta salvar um grupo de garotas. Também tentando fugir, Max aceita
            ajudá-la.
          </p>
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
          contentModal={
            <iframe
              className="rounded-md shadow-md border border-zinc-400"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IVmf82obaaA"
              title="YouTube video player"
              // frameBorder="0"
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
