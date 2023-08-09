import React, { useContext } from "react";
import { DataContext } from "../../app/api/ContextApi";
import { convertDate } from "../../app/api/utils/utils";
import HeadEdit from "@/app/helpers/Head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Cartaz from "@/app/components/Cartaz";
import TopSection from "@/app/components/TopSection";

function Movies() {
  const { infoGeneralMovies } = useContext(DataContext);

  return (
    <>
      {infoGeneralMovies ? (
        <>
          <HeadEdit titlePage="Filmes" />
          <Header />
          <section className="max-w-[1230px] m-auto py-14">
          <h2 className="title-main">Filmes</h2>
          <p className="description">Filmes atualizados e disponíveis.</p>
            <div className="w-full grid grid-flow-row grid-cols-6 gap-2">
              {infoGeneralMovies?.map((movie) => (
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
          </section>
          <TopSection />
          <Footer />
        </>
      ) : (
        <p>Carregando </p>
      )}
    </>
  );
}

export default Movies;
