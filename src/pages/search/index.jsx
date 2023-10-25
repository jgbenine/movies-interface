import React, { useState } from "react";
import HeadEdit from "@/app/ui/components/helpers/Head";
import Header from "@/app/ui/components/navigation/Header";
import Cartaz from "@/app/ui/components/partials/Cartaz";
import Link from "next/link";
import styles from '../../app/ui/css/pages/Search.module.scss'
import { DataContext } from "@/app/data/hooks/ContextApi";
import { convertDate } from "@/app/data/utils/utils";
import { Input } from "@/app/ui/components/form/Input";
import IntroSection from "@/app/ui/components/sections/IntroSection";

function Search() {
  const [contentSearch, setContentSearch] = useState([]);
  const { infoSearch, setSearchQuery} = React.useContext(DataContext);

  React.useEffect(() => {
    setContentSearch(infoSearch);
    console.log(infoSearch)
  }, [infoSearch]);

  function handleInput(event) {
    const valueQuery = event.target.value;
    if(valueQuery){
      const refactorQuery = valueQuery.replace(/ /g, '+')
      setSearchQuery(refactorQuery)
    }
  }

  return (
    <>
      <HeadEdit titlePage="Procurar Filme" />
      <Header />
      <section className={`container ${styles.search}`}>
      <IntroSection
          titleSection="Encontre seu conteúdo"
          descriptionSection="Não encontrou em nossas pages? tente pesquisar pelo que procura"
        />
        <Input onChange={handleInput} placeholder="Pesquisar" />
        <div className={`gridMain ${styles.searchGrid}`}>
          {contentSearch?.map((contentSearch, index) => (
            <Link key={index} href={`/details/${contentSearch.id}?type=movie`}>
              <Cartaz
                backgroundImage={`https://image.tmdb.org/t/p/w200/${contentSearch.poster_path}`}
                titleMovie={contentSearch.original_title}
                sinceFilme={convertDate(contentSearch.release_date)}
                rate={contentSearch.vote_average}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
