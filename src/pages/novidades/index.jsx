'use client'
import React from 'react'
import Cartaz from '@/app/componentes/Cartaz'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination, Navigation, } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from '../../app/css/Novidades.module.scss'

function Novidades() {
  return (
    <section className={`container ${styles.news}`}>
      <div className={styles.newsWrapper}>
        <h2 className="title-main">Novidades</h2>
        <p className="description">Filmes que estão em alta</p>
        <div className={styles.newsSlider}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
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
              1500:{
                slidesPerView:6
              },
              1700:{
                slidesPerView:7
              }
            }}
            // centeredSlides={true}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
          >
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/cartaz-img2.jpg"
                titleMovie="Pulp Fiction"
                sinceFilme="1994"
                director="Quentin Tarantino"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/cartaz-img3.jpg"
                titleMovie="Django Livre"
                sinceFilme="2012"
                director="Quentin Tarantino"
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
                backgroundImage="/assets/cartaz-img5.jpg"
                titleMovie="Clube da Luta"
                sinceFilme="1999"
                director="David Fincher"
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
            <SwiperSlide>
              <Cartaz
                backgroundImage="/assets/cartaz-img9.jpg"
                titleMovie="Matrix"
                sinceFilme="1999"
                director="Lana Wachowski"
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
                backgroundImage="/assets/cartaz-img8.jpg"
                titleMovie="Watchmen"
                sinceFilme="2009"
                director="Zack Snyder"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div >
    </section >
  )
}

export default Novidades
