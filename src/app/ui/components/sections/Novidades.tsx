"use client"
import "swiper/css/navigation";
import styles from "../../css/components/Novidades.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { convertDate } from "../../../data/utils/utils";
import { IntroSection } from "./IntroSection";
import { Cartaz } from "../partials/Cartaz";


type CartazProps = {
  introSection:{
    titleSection: string,
    descriptionSection: string,
    linkHrefSection: string,
  }
  results: {
    id: number,
    poster_path: string,
    name: string,
    vote_average: string,
    first_air_date: string,
    rate: string,
  }[]
}

export function Novidades({ results, introSection }: CartazProps) {
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

