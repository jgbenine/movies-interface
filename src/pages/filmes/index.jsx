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
  const { infoNewsMovies } = useContext(DataContext);

  return (
    <>
      {infoNewsMovies ? (
        <>
          <HeadEdit titlePage="Filmes" />
          <Header />
          <section className="max-w-[1230px] m-auto py-14">
          <h2 className="title-main">Filmes</h2>
          <p className="description">Filmes atualizados e disponíveis.</p>
            <div className="w-full grid grid-flow-row grid-cols-6 gap-2">
              {infoNewsMovies?.map((serie) => (
                <Link key={serie.id} href={`/details/${serie.id}?type=movie`}>
                  <Cartaz
                    backgroundImage={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                    titleMovie={serie.original_title}
                    sinceFilme={convertDate(serie.release_date)}
                    rate={serie.vote_average}
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
