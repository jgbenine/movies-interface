
import { convertDate } from "../../app/data/utils/utils";
import styles from '../../app/ui/css/pages/Series.module.scss';
import { Cartaz } from "../../app/ui/components/partials/Cartaz";
import { getNewsSeries } from "../../app/data/services/api/routes/routes";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import Header from "../../app/ui/components/navigation/Header";
import HeadEdit from "../../app/ui/components/helpers/Head";
import Footer from "../../app/ui/components/navigation/Footer";

export async function getServerSideProps() {
  const data = await getNewsSeries();
  return {
    props: {
      data
    }
  };
}
export default function Series({ data }) {
  return (
    <>
      <HeadEdit titlePage="Séries" descriptionPage="Encontre sua série preferida!" />
      <section className={`containerMain ${styles.series}`}>
        <IntroSection
          titleSection="Series"
          descriptionSection="Navegue e encontre a sua série preferida!"
          linkHrefSection=""
        />
        <div className={`gridMain`}>
          {data.map((serie: any) => (
            <Cartaz
              id={serie.id}
              key={serie.id}
              type="series"
              backgroundImage={`https://image.tmdb.org/t/p/w200/${serie.poster_path}`}
              titleMovie={serie.name}
              sinceFilme={convertDate(serie.first_air_date)}
              rate={serie.vote_average}
            />
          ))}
        </div>
        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        /> */}
      </section>
      {/* <Novidades /> */}
    </>
  );
}

