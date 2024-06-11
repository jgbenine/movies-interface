
import { convertDate } from "../../app/data/utils/utils";
import styles from '../../app/ui/css/pages/Series.module.scss';
import { Cartaz } from "../../app/ui/components/partials/Cartaz";
import { SeriesProps, getNewsSeries } from "../../app/data/api/routes/routes";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import HeadEdit from "../../app/ui/components/helpers/Head";

export async function getServerSideProps() {
  const newsSeries = await getNewsSeries();
  return {
    props: {
      newsSeries
    }
  };
}

export default function Series({ newsSeries }) {
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
          {newsSeries.map((serie: SeriesProps) => (
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
      </section>
    </>
  );
}

