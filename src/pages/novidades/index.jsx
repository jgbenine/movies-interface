'use client'
import React from 'react'
import Cartaz from '@/app/componentes/Cartaz'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from '../../app/css/Novidades.module.scss'

function Novidades() {
  return (
    <section className={`container ${styles.news}`}>
      <div className={styles.newsWrapper}>
        <h2 className="title-main">Novidades</h2>
        <p className="description"></p>
        <div className={styles.newsSlider}>
          <Swiper
            breakpoints={{
              400:{
                slidesPerView:2,
              },
              639: {
                slidesPerView: 3,
              },
              865:{
                slidesPerView:4,
              },
              1000:{
                slidesPerView:5
              },
            }}
            // centeredSlides={true}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
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
                backgroundImage="/assets/cartaz-img10.jpg"
                titleMovie="Até o último Homem"
                sinceFilme="2017"
                director="Mel Gibson"
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
                backgroundImage="/assets/cartaz-img4.jpg"
                titleMovie="Ilha do Medo"
                sinceFilme="2010"
                director="Martin Scorsese"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/cartaz-img6.jpg"
                titleMovie="Interstelar"
                sinceFilme="2014"
                director="Christopher Nolan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/cartaz-img11.jpg"
                titleMovie="Mad Max"
                sinceFilme="2015"
                director="George Miller"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div >
    </section >
  )
}

export default Novidades
