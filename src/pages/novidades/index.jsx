"use client";
import React from "react";
import Cartaz from "@/app/componentes/Cartaz";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../../app/css/Novidades.module.scss";

function Novidades() {
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
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/blackmirror.jpg"
                titleMovie="Black Mirror"
                sinceFilme="2011"
                director="Charlie Brooker"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/breaking.jpg"
                titleMovie="Breaking Bad"
                sinceFilme="2013"
                director="Vince Gilligan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/snowpierce.jpg"
                titleMovie="Expresso do Amanhã"
                sinceFilme="2022"
                director="Bong Joon-ho"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/stranger.jpg"
                titleMovie="Stranger Things"
                sinceFilme="2016"
                director="Ross Duffer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/the-wire.jpg"
                titleMovie="A Escuta"
                sinceFilme="2002"
                director="David Simon"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/wutang.jpg"
                titleMovie="Interstelar"
                sinceFilme="2014"
                director="Christopher Nolan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/series/the-last.jpg"
                titleMovie="The last of us"
                sinceFilme="2023"
                director="Craig Mazin, Neil Druckmann"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Novidades;
