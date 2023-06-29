import React from 'react'
import styles from '../css/Sliders.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';

function SliderDry() {
  return (
    <section className={styles.sliderDry}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.sliderItem} style={{background: 'url(../../../public/assets/cartaz-img1.jpg)'}} >
              Conteudo
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SliderDry
