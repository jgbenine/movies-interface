
import { convertDate } from "../../app/data/utils/utils";
import styles from '../../app/ui/css/pages/Series.module.scss';
import { Cartaz } from "../../app/ui/components/partials/Cartaz";
import { SeriesProps, getNewsSeries } from "../../app/data/api/routes/routes";
import { IntroSection } from "../../app/ui/components/sections/IntroSection";
import HeadEdit from "../../app/ui/components/helpers/Head";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const initialData = await getNewsSeries(1);
  return {
    props: {
      initialData
    }
  };
}

export default function Series({ initialData }) {
  const [series, setSeries] = useState<SeriesProps[]>(initialData);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  const loadMoreSeries = async () => {
    setLoading(true);
    const newPage = page + 1;
    const newsSeries = await getNewsSeries(newPage);
    if (newsSeries) {
      setSeries((prevSeries) => [...prevSeries, ...newsSeries]);
    }
    setPage(newPage);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      loadMoreSeries();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);


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
          {series.map((serie, index: number) => (
            <Cartaz
              key={index}
              id={serie.id}
              type="series"
              backgroundImage={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
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

