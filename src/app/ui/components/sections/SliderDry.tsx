'use client'
import "swiper/css";
import 'swiper/css/pagination';
import styles from "../../css/components/Sliders.module.scss";
import MovieWrapper from "../partials/MovieWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { convertDate } from "../../../data/utils/utils";

type TopMovies = {
  results: {
    id: number;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
  }[]
}

export function SliderDry({ results }: TopMovies) {
  return (
    <div className={styles.sliderDry}>
      <Swiper
        modules={[Autoplay, Pagination]}
        effect={'creative'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
      >
        {results.map((dataInfo, index) => (
          <SwiperSlide key={index}>
            <MovieWrapper
              backgroundImage={`https://image.tmdb.org/t/p/w200/${dataInfo.backdrop_path}`}
              title={dataInfo.title}
              ano={convertDate(dataInfo.release_date)}
              sinopse={dataInfo.overview}
              // linkMovie={`/details/${dataInfo.id}?type=movie`}
              linkMovie=""
              vote={dataInfo.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
