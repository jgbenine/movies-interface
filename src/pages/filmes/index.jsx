import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../app/api/ContextApi";
import { convertDate } from "../../app/api/utils/utils";
import HeadEdit from "@/app/helpers/Head";
import Header from "@/app/components/navigation/Header";
import Footer from "@/app/components/navigation/Footer";
import Link from "next/link";
import Cartaz from "@/app/components/partials/Cartaz";
import TopSection from "@/app/components/sections/TopSection";
import Pagination from "@/app/components/partials/Pagination";
import IntroSection from "@/app/components/sections/IntroSection";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const { currentPage, setCurrentPage, totalPages, fetchAllDataPages } = useContext(DataContext);

  useEffect(() => {
    fetchAllDataPages("/3/discover/movie", setAllMovies);
  }, [fetchAllDataPages]);

  useEffect(() => {
    setCurrentPage(1)
  },[]);

  return (
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
  );
}

export default Movies;
