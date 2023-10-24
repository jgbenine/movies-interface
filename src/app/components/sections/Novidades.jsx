import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { convertDate } from "../../api/utils/utils";
import { DataContext } from "../../api/ContextApi";
import Cartaz from "@/app/components/partials/Cartaz";
import styles from "../../css/components/Novidades.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import IntroSection from "./IntroSection";

function Novidades() {
  const { infoNewsTv } = useContext(DataContext);

  return (
    <>
      {infoNewsTv ? (
        <section className={`container ${styles.news}`}>
          <>
            <IntroSection
              titleSection="Series Populares"
              descriptionSection="Seleção de mais avaliadas."
              linkHrefSection={"/series"}
            />
            <div>
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
                {infoNewsTv?.map((tvSerie) => (
                  <SwiperSlide key={tvSerie.id}>
                    <Link href={`/details/${tvSerie.id}?type=tv`}>
                      <Cartaz
                        backgroundImage={`https://image.tmdb.org/t/p/w200/${tvSerie.poster_path}`}
                        titleMovie={tvSerie.name}
                        sinceFilme={convertDate(tvSerie.first_air_date)}
                        rate={tvSerie.vote_average}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        </section>
      ) : (
        <p>Carregando</p>
      )}
    </>
  );
}

export default Novidades;
