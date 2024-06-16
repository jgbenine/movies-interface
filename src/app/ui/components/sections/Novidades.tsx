"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { convertDate } from "../../../data/utils/utils";
import { IntroSection, IntroSectionProps } from "./IntroSection";
import { Cartaz } from "../partials/Cartaz";
import { SeriesProps } from "../../../data/api/routes/routes";
import "swiper/css/navigation";
import styles from "../../css/components/Novidades.module.scss";


type NovidadesProps = {
  introSection: IntroSectionProps
  results: SeriesProps[]
}

export function Novidades({ results, introSection }: NovidadesProps) {
  return (
    <section className={`containerMain ${styles.news}`}>
      <>
        <IntroSection
          titleSection={introSection.titleSection}
          descriptionSection={introSection.descriptionSection}
          linkHrefSection={introSection.linkHrefSection}
        />
        <div className={styles.newsSlider}>
          <Swiper
            spaceBetween={50}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{ hideOnClick: true }}
            breakpoints={{
              400: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 3,
              },
              865: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5,
              },
            }}
          >
            {results?.map((tvSerie) => (
              <SwiperSlide key={tvSerie.id}>
                <Cartaz
                  key={tvSerie.id}
                  id={tvSerie.id}
                  type="series"
                  backgroundImage={`https://image.tmdb.org/t/p/w200/${tvSerie.poster_path}`}
                  titleMovie={tvSerie.name}
                  sinceFilme={convertDate(tvSerie.first_air_date)}
                  rate={tvSerie.vote_average}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    </section>

  );
}

