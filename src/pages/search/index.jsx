import React, { useState, useEffect, useContext } from "react";
import HeadEdit from "@/app/ui/components/helpers/Head";
import Header from "@/app/ui/components/navigation/Header";
import Cartaz from "@/app/ui/components/partials/Cartaz";
import IntroSection from "@/app/ui/components/sections/IntroSection";
import Link from "next/link";
import styles from "../../app/ui/css/pages/Search.module.scss";
import { DataContext } from "@/app/data/hooks/ContextApi";
import { convertDate } from "@/app/data/utils/utils";
import { Input } from "@/app/ui/components/form/Input";
import Footer from "@/app/ui/components/navigation/Footer";

function Search() {
  const [contentSearchMovie, setContentSearchMovie] = useState([]);
  const [contentSearchTv, setContentSearchTv] = useState([]);
  const { infoMovieSearch, infoTvSearch, setSearchQuery } =
    React.useContext(DataContext);

    useEffect(() => {
    setContentSearchMovie(infoMovieSearch);
    setContentSearchTv(infoTvSearch);
  }, [infoMovieSearch, infoTvSearch]);

  function handleInput(event) {
    const valueQuery = event.target.value;
    if (valueQuery) {
      const refactorQuery = valueQuery.replace(/ /g, "+");
      setSearchQuery(refactorQuery);
    }
  }

  return (
    <>
      <HeadEdit titlePage="Procurar Filme" />
      <Header />
      <section className={`container ${styles.search}`}>
        <IntroSection
          titleSection="Encontre seu conteúdo"
          descriptionSection="Não encontrou em nossas páginas? tente pesquisar pelo que procura"
        />
        <Input onChange={handleInput} placeholder="Pesquisar" />
        <>
          {infoMovieSearch.length !== 0 ? (
            <>
              <h1 className="text-lg text-center text-white pt-5 min-[720px]:text-left">Filmes</h1>
              <div className={`gridMain ${styles.searchGrid}`}>
                {contentSearchMovie?.map((contentSearchMovie, index) => (
                  <Link
                    key={index}
                    href={`/details/${contentSearchMovie.id}?type=movie`}
                  >
                    <Cartaz
                      backgroundImage={`https://image.tmdb.org/t/p/w200/${contentSearchMovie.poster_path}`}
                      titleMovie={contentSearchMovie.original_title}
                      sinceFilme={convertDate(contentSearchMovie.release_date)}
                      rate={contentSearchMovie.vote_average}
                    />
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </>
        <>
          {contentSearchTv.length !== 0 ? (
            <>
              <h1 className="text-lg text-center text-white pt-5 min-[720px]:text-left">Series</h1>
              <div className={`gridMain ${styles.searchGrid}`}>
                {contentSearchTv?.map((contentSearchTv, index) => (
                  <Link
                    key={index}
                    href={`/details/${contentSearchTv.id}?type=movie`}
                  >
                    <Cartaz
                      backgroundImage={`https://image.tmdb.org/t/p/w200/${contentSearchTv.poster_path}`}
                      titleMovie={contentSearchTv.name}
                      sinceFilme={convertDate(contentSearchTv.first_air_date)}
                      rate={contentSearchTv.vote_average}
                    />
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </>
      </section>
      <Footer />
    </>
  );
}

export default Search;
