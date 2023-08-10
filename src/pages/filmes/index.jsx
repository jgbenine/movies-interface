import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../app/api/ContextApi";
import { convertDate } from "../../app/api/utils/utils";
import HeadEdit from "@/app/helpers/Head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Cartaz from "@/app/components/Cartaz";
import TopSection from "@/app/components/TopSection";
import Pagination from "@/app/components/Pagination";
import IntroSection from "@/app/components/IntroSection";

function Movies() {
  const {
    allMovies,
    currentPage,
    setCurrentPage,
    getCurrentPageData,
    totalPages,
  } = useContext(DataContext);


  return (
    <>
      {allMovies.length > 0 ? (
        <>
          <HeadEdit titlePage="Filmes" />
          <Header />
          <section className="max-w-[1230px] m-auto py-14">
          <IntroSection
              titleSection="Filmes"
              descriptionSection="Navegue e encontre o seu filme"
            />
            <div className="w-full grid grid-flow-row grid-cols-6 gap-2">
              {allMovies?.map((movie, index) => (
                <Link key={index} href={`/details/${movie.id}?type=movie`}>
                  <Cartaz
                    backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    titleMovie={movie.original_title}
                    sinceFilme={convertDate(movie.release_date)}
                    rate={movie.vote_average}
                  />
                </Link>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
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
