import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../app/data/hooks/ContextApi";
import { convertDate } from "../../app/data/utils/utils";
import HeadEdit from "@/app/ui/components/helpers/Head";
import Header from "@/app/ui/components/navigation/Header";
import Footer from "@/app/ui/components/navigation/Footer";
import Link from "next/link";
import Cartaz from "@/app/ui/components/partials/Cartaz";
import Novidades from "@/app/ui/components/sections/Novidades";
import Pagination from "@/app/ui/components/partials/Pagination";
import IntroSection from "@/app/ui/components/sections/IntroSection";
import styles from '../../app/ui/css/pages/Series.module.scss';

function Series() {
  const { currentPage, setCurrentPage, totalPages, fetchAllDataPages } = useContext(DataContext);
  const [allSeries, setAllSeries] = useState([]);

  useEffect(()=>{
    fetchAllDataPages("/3/discover/tv", setAllSeries)
  },[fetchAllDataPages])

  useEffect(() => {
    setCurrentPage(1)
  },[setCurrentPage]);

  return (
    <>
      <HeadEdit titlePage="Séries" />
      <Header />
      <section className={`containerMain ${styles.series}`}>
        <IntroSection
          titleSection="Series"
          descriptionSection="Navegue e encontre a sua série"
        />
        <div className={`gridMain`}>
          {allSeries?.map((serie, index) => (
            <Link key={index} href={`/details/${serie.id}?type=tv`}>
              <Cartaz
                backgroundImage={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                titleMovie={serie.name}
                sinceFilme={convertDate(serie.first_air_date)}
                rate={serie.vote_average}
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
      <Novidades />
      <Footer />
    </>
  );
}

export default Series;
