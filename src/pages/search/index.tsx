'use client'
import styles from "../../app/ui/css/pages/Search.module.scss";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import { Input } from "../../app/ui/components/form/Input"
import { MovieProps, getSearch } from "../../app/data/api/routes/routes";
import { useState } from "react";
import { Cartaz } from "../../app/ui/components/partials/Cartaz";


function Search() {
  const [searchData, setSearchData] = useState([]);
  async function handleInput(event:React.ChangeEvent<HTMLInputElement>) {
    const valueQuery = event.target.value;
    if (valueQuery) {
      const refactorQuery = valueQuery.replace(/ /g, "+");
      const data = await getSearch(refactorQuery);
      setSearchData(data);
    }
  }

  return (
    <>
      <section className={`containerMain ${styles.search}`}>
        <IntroSection
          titleSection="Encontre seu conteúdo"
          descriptionSection="Não encontrou em nossas páginas? tente pesquisar pelo que procura"
        />
        <Input onChange={handleInput} />

        <div className={styles.searchGrid}>
          {searchData?.map((item : MovieProps) => (
              <Cartaz
                id={item.id}
                type={item.media_type === 'tv' ? 'series' : 'filmes'}
                key={item.id}
                backgroundImage={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                titleMovie={item.original_title}
                sinceFilme={item.release_date}
                rate={item.vote_average}
              />
          ))}
        </div>

      </section>
    </>
  );
}

export default Search;
