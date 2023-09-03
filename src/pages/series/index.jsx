import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../app/api/ContextApi";
import { convertDate } from "../../app/api/utils/utils";
import HeadEdit from "@/app/helpers/Head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Cartaz from "@/app/components/Cartaz";
import Novidades from "@/app/components/Novidades";
import Pagination from "@/app/components/Pagination";
import IntroSection from "@/app/components/IntroSection";

function Series() {
  const { currentPage, setCurrentPage, totalPages, fetchAllDataPages } = useContext(DataContext);
  const [allSeries, setAllSeries] = useState([]);

  useEffect(()=>{
    fetchAllDataPages("/3/discover/tv", setAllSeries)
  },[fetchAllDataPages])

  return (
    <>
      <HeadEdit titlePage="Séries" />
      <Header />
      <section className="max-w-[1230px] m-auto py-14">
        <IntroSection
          titleSection="Series"
          descriptionSection="Navegue e encontre a sua série"
        />
        <div className="w-full grid grid-flow-row grid-cols-6 gap-2">
          {allSeries?.map((serie, index) => (
            <Link key={index} href={`/details/${serie.id}?type=tv`}>
              <Cartaz
                backgroundImage={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
                titleMovie={serie.original_title}
                sinceFilme={convertDate(serie.release_date)}
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
