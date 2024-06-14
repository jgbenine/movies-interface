'use client'
import HeadEdit from "../../app/ui/components/helpers/Head";
import { convertDate } from "../../app/data/utils/utils";
import { MovieProps, getNewsMovies } from "../../app/data/api/routes/routes";
import { Cartaz } from "../../app/ui/components/partials/Cartaz";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import { useEffect, useState } from "react";
import styles from "../../app/ui/css/pages/Movies.module.scss"

export async function getServerSideProps() {
  const data = await getNewsMovies(1);
  return {
    props: {
      initialData: data,
    },
  };
}

export default function Movies({ initialData }) {
  const [movies, setMovies] = useState<MovieProps[]>(initialData);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreMovies = async () => {
    setLoading(true);
    const newPage = page + 1;
    const newMovies = await getNewsMovies(newPage);
    if (newMovies) {
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
    }
    setPage(newPage);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      loadMoreMovies();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  return (
    <>
      <HeadEdit titlePage="Filmes" descriptionPage="Encontre seu filme preferido!" />
      <section className={`containerMain ${styles.movies}`}>
        <IntroSection
          titleSection="Filmes"
          descriptionSection="Navegue e encontre o seu filme"
          linkHrefSection=""
        />
        <div className={`gridMain`}>
          {movies?.map((movie, index) => (
            <Cartaz
              key={index}
              id={movie.id}
              type="/filmes"
              backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              titleMovie={movie.original_title}
              sinceFilme={convertDate(movie.release_date)}
              rate={movie.vote_average}
            />
          ))}
        </div>
      </section>
    </>
  );
}