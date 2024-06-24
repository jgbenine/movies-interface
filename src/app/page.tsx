import styles from "../app/ui/css/pages/Home.module.scss";
import { IntroSection } from "./ui/components/sections/IntroSection";
import { MovieProps, getNewsMovies, getPopularMovies, getTopSeries } from "./data/api/routes/routes";
import { SliderDry } from "./ui/components/sections/SliderDry";
import { convertDate } from "./data/utils/utils";
import { Cartaz } from "./ui/components/partials/Cartaz";
import { Novidades } from "./ui/components/sections/Novidades";
import { TopSection } from "./ui/components/sections/TopSection";
import Header from "./ui/components/navigation/Header";
import Footer from "./ui/components/navigation/Footer";


export default async function Home() {
  const popularMovies = await getPopularMovies();
  const newsMovies = await getNewsMovies(1);
  const topSeries = await getTopSeries();

  return (
    <>
      <Header />
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
                backgroundImage={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                titleMovie={movie.original_title}
                sinceFilme={convertDate(movie.release_date)}
                rate={movie.vote_average}
              />
            ))}
          </div>
          <Novidades
            results={topSeries}
            introSection={{ titleSection: "Series Populares", descriptionSection: "Series atualizadas ou adicionadas", linkHrefSection: "/series" }} />
          <TopSection />
        </div>
      </section>
      <Footer />
    </>
  );
}
