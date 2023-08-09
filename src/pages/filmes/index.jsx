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
import fetchMain from "@/app/api/axiosConfig";

function Movies() {
  const [allMovies, setAllMovies] = useState([]); // Estado para armazenar todos os filmes

  const maxMovies = 54;
  useEffect(() => {
    async function fetchAllMovies() {
      try {
        let movies = [];
        let page = 1;

        while (movies.length < maxMovies) {
          const response = await fetchMain(`/3/discover/movie?page=${page}`);
          if (movies.length + response.data.results.length > maxMovies) {
            // Se adicionar os resultados ultrapassar o limite de 25, pegue apenas os filmes que faltam
            const remainingMovies = maxMovies - movies.length;
            movies = movies.concat(response.data.results.slice(0, remainingMovies));
          } else {
            movies = movies.concat(response.data.results);
          }
          page++;
        }
        setAllMovies(movies);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
    fetchAllMovies();
  },[]);

  return (
    <>
      {allMovies ? (
        <>
          <HeadEdit titlePage="Filmes" />
          <Header />
          <section className="max-w-[1230px] m-auto py-14">
            <h2 className="title-main">Filmes</h2>
            <p className="description">Filmes atualizados e disponíveis.</p>
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
            {/* <Pagination
   
            /> */}
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
