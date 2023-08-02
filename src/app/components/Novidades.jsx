"use client";
import React, { useEffect, useState } from "react";
import Cartaz from "@/app/components/Cartaz";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../css/components/Novidades.module.scss";
import fetchMain from "../api/axiosConfig";

function Novidades() {
  const [newsTv, setNewsTv] = useState([]);

  useEffect(() => {
    async function newsSeries() {
      try {
        const response = await fetchMain("/3/discover/tv");
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
      <div className={styles.newsWrapper}>
        <h2 className="title-main">Series</h2>
        <p className="description">Series disponíveis</p>
        <div className={styles.newsSlider}>
          <Swiper
            spaceBetween={50}
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
                <Cartaz
                  backgroundImage={`https://image.tmdb.org/t/p/w200/${tvSerie.poster_path}`}
                  titleMovie={tvSerie.name}
                  sinceFilme={tvSerie.first_air_date}
                  rate={tvSerie.vote_average}
                />
              </SwiperSlide>
            ))}
            teste2
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Novidades;
