import HeadEdit from "../../app/ui/components/helpers/Head";
import { convertDate } from "../../app/data/utils/utils";
import { getNewsMovies } from "../../app/data/api/routes/routes";
import { Cartaz } from "../../app/ui/components/partials/Cartaz";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import styles from "../../app/ui/css/pages/Movies.module.scss"

export async function getServerSideProps() {
  const data = await getNewsMovies();
  return {
    props: {
      data
    }
  };
}

export default function Movies({ data }) {
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
          {data?.map((movie) => (
            <Cartaz
              key={movie.id}
              id={movie.id}
              type="/filmes"
              backgroundImage={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              titleMovie={movie.original_title}
              sinceFilme={convertDate(movie.release_date)}
              rate={movie.vote_average}
            />
          ))}
        </div>
        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        /> */}
      </section>
      {/* <TopSection /> */}
    </>
  );
}