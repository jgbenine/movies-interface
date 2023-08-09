import React, { useContext } from "react";
import "../../app/globals.css";
import HeadEdit from "@/app/helpers/Head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Cartaz from "@/app/components/Cartaz";
import { DataContext } from "../../app/api/ContextApi";
import { convertDate } from "../../app/api/utils/utils";

function Movies() {
  const { infoNewsMovies } = useContext(DataContext);

  return (
    <>
      {infoNewsMovies ? (
        <>
          <HeadEdit titlePage="Filmes" />
          <Header />

          <section>
            <div className="">
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
          </section>

          <Footer />
        </>
      ) : (
        <p>Carregando </p>
      )}
    </>
  );
}

export default Movies;
