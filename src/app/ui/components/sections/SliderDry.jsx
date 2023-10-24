import React, { useContext } from "react";
import MovieWrapper from "../partials/MovieWrapper";
import styles from "../../css/components/Sliders.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { DataContext } from "../../../data/hooks/ContextApi";
import { convertDate } from "../../../data/utils/utils";

function SliderDry() {
  const { infoTopMovies } = useContext(DataContext);

  return (
    <>
      <section className={styles.sliderDry}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
        >
          {infoTopMovies.map((dataInfo, index) => (
            <SwiperSlide key={index}>
              <MovieWrapper
                backgroundImage={`https://image.tmdb.org/t/p/w200/${dataInfo.backdrop_path}`}
                title={dataInfo.title}
                ano={convertDate(dataInfo.release_date)}
                sinopse={dataInfo.overview}
                linkMovie={`/details/${dataInfo.id}?type=movie`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default SliderDry;
