// import { convertDate } from "./data/utils/utils";
// import { DataContext } from "./data/hooks/ContextApi";
// import { useContext, useEffect } from "react";
// import Novidades from "./ui/components/sections/Novidades";
// import SliderDry from "./ui/components/sections/SliderDry";
// import TopSection from "./ui/components/sections/TopSection";
import styles from "../app/ui/css/pages/Home.module.scss";
// import HeadEdit from "./ui/components/helpers/Head";
// import Link from "next/link";
// import Header from "./ui/components/navigation/Header";
// import Footer from "./ui/components/navigation/Footer";
import { IntroSection } from "./ui/components/sections/IntroSection";
import { getNewsMovies, getPopularMovies, getTopFiveMovies, getTopSeries } from "./data/services/api/routes/routes";
import { SliderDry } from "./ui/components/sections/SliderDry";
import { convertDate } from "./data/utils/utils";
import { Cartaz } from "./ui/components/partials/Cartaz";
import { Novidades } from "./ui/components/sections/Novidades";
import { TopSection } from "./ui/components/sections/TopSection";


export default async function Home() {
  const popularMovies = await getPopularMovies();
  const topMovies = await getTopFiveMovies();
  const newsMovies = await getNewsMovies();
  const topSeries = await getTopSeries();

  return (
    <>
      <section>
        <SliderDry results={popularMovies} />
        <div className={`containerMain ${styles.homeSection}`}>
          <IntroSection
            titleSection="Novos Filmes"
            descriptionSection="Descubra novos filmes"
            linkHrefSection={"/filmes"}
          />
          <div className={`gridMain`}>
            {newsMovies?.map((movie) => (
              <Cartaz
                id={movie.id}
                key={movie.id}
                type="filmes"
                backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                titleMovie={movie.original_title}
                sinceFilme={convertDate(movie.release_date)}
                rate={movie.vote_average}
              />
            ))}
          </div>
          <Novidades results={topSeries} />
          <TopSection results={topMovies} />
        </div>
      </section>
    </>

    //     <main>
    //       <HeadEdit
    //         titlePage="Home"
    //         descriptionPage="Melhor informação sobre seu filme."
    //       />
    //       <Header />
    //       <SliderDry />
    //       <section className={`containerMain ${styles.homeSection}`}>
    //         <IntroSection
    //           titleSection="Novos Filmes"
    //           descriptionSection="Descubra novos filmes"
    //           linkHrefSection={"/filmes"}
    //         />
    //         <div className={`gridMain`}>
    //           {infoNewsMovies?.map((movie) => (
    //             <Link key={movie.id} href={`/details/${movie.id}?type=movie`}>
    //               <Cartaz
    //                 backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
    //                 titleMovie={movie.original_title}
    //                 sinceFilme={convertDate(movie.release_date)}
    //                 rate={movie.vote_average}
    //               />
    //             </Link>
    //           ))}
    //         </div>
    //         <Novidades />
    //         <TopSection />
    //       </section>
    //     </main>
    //   <Footer />
    // </>

  );
}
