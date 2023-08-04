"use client";
import React, { useEffect, useState } from "react";
import Cartaz from "@/app/components/Cartaz";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "../css/components/Novidades.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import fetchMain from "../api/axiosConfig";
import { convertDate } from "../api/utils/utils";
import Link from "next/link";

function Novidades() {
  const [newsTv, setNewsTv] = useState([]);

  useEffect(() => {
    async function newsSeries() {
      try {
        const response = await fetchMain("/3/trending/tv/week");
        const data = await response.data.results;
        setNewsTv(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
    newsSeries();
  }, []);

  return (
    <section className={`container ${styles.news}`}>
      <div>
        <h2 className="title-main">Novas Series</h2>
        <p className="description">Series disponíveis</p>
        <div>
          <Swiper
            spaceBetween={50}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{hideOnClick: true}}
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
            {newsTv?.map((tvSerie) => (
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
      </div>
    </section>
  );
}

export default Novidades;
