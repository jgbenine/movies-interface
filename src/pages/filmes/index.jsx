import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../app/data/hooks/ContextApi";
import { convertDate } from "../../app/data/utils/utils";
import HeadEdit from "@/app/ui/components/helpers/Head";
import Header from "@/app/ui/components/navigation/Header";
import Footer from "@/app/ui/components/navigation/Footer";
import Link from "next/link";
import Cartaz from "@/app/ui/components/partials/Cartaz";
import TopSection from "@/app/ui/components/sections/TopSection";
import Pagination from "@/app/ui/components/partials/Pagination";
import IntroSection from "@/app/ui/components/sections/IntroSection";
import styles from '../../app/ui/css/pages/Movies.module.scss'

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const { currentPage, setCurrentPage, totalPages, fetchAllDataPages } = useContext(DataContext);

  useEffect(() => {
    fetchAllDataPages("/3/discover/movie", setAllMovies);
  }, [fetchAllDataPages]);

  useEffect(() => {
    setCurrentPage(1)
  },);

  return (
    <>
      <HeadEdit titlePage="Filmes" />
      <Header />
      <section className={`container ${styles.movies}`}>
        <IntroSection
          titleSection="Filmes"
          descriptionSection="Navegue e encontre o seu filme"
        />
        <div className={`gridMain`}>
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
