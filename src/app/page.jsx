'use client';
import { convertDate } from "./api/utils/utils";
import { DataContext } from "./api/ContextApi";
import { useContext } from "react";
import Novidades from "./components/sections/Novidades";
import Cartaz from "./components/partials/Cartaz";
import SliderDry from "./components/sections/SliderDry";
import TopSection from "./components/sections/TopSection";
import styles from "./css/pages/Home.module.scss";
import HeadEdit from "./helpers/Head";
import Link from "next/link";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import IntroSection from "./components/sections/IntroSection";

export default function Home() {
  const { infoNewsMovies } = useContext(DataContext);
  return (
    <>
      {infoNewsMovies ? (
        <>
          <HeadEdit
            titlePage="Home"
            descriptionPage="Melhor informação sobre seu filme."
          />
          <Header />
          <SliderDry />
          <section className={`container ${styles.homeSection}`}>
            <IntroSection
              titleSection="Novos Filmes"
              descriptionSection="Descubra novos filmes"
              linkHrefSection={"/filmes"}
            />
            <div className={`gridMain`}>
              {infoNewsMovies?.map((movie) => (
                <Link key={movie.id} href={`/details/${movie.id}?type=movie`}>
                  <Cartaz
                    backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    titleMovie={movie.original_title}
                    sinceFilme={convertDate(movie.release_date)}
                    rate={movie.vote_average}
                  />
                </Link>
              ))}
            </div>
            <Novidades />
            <TopSection />
          </section>
        </>
      ) : (
        <p>Carregando</p>
      )}
      <Footer />
    </>
  );
}
