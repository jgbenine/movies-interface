import React, { useContext } from "react";
import { DataContext } from "../../app/api/ContextApi";
import { convertDate } from "../../app/api/utils/utils";
import HeadEdit from "@/app/helpers/Head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Cartaz from "@/app/components/Cartaz";
import Novidades from "@/app/components/Novidades";
import Pagination from "@/app/components/Pagination";

function Series() {
  const {
    allSeries,
    currentPage,
    setCurrentPage,
    getCurrentPageData,
    totalPages,
  } = useContext(DataContext);

  return (
    <>
      {getCurrentPageData ? (
        <>
          <HeadEdit titlePage="Séries" />
          <Header />
          <section className="max-w-[1230px] m-auto py-14">
            <h2 className="title-main">Series</h2>
            <p className="description">Series atualizadas e disponíveis.</p>
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
      ) : (
        <p>Carregando </p>
      )}
    </>
  );
}

export default Series;