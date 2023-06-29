import React from 'react'
import styles from '../css/Sliders.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import MovieWrapper from './MovieWrapper';

function SliderDry() {
  return (
    <section className={styles.sliderDry}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <MovieWrapper
            backgroundImage="assets/cartaz-img1.jpg"
            title="Coringa"
            ano="2019"
            genero="Crime/Drama"
            sinopse="Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante."
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieWrapper
            backgroundImage="assets/cartaz-img8.jpg"
            title="Watchmen - O Filme"
            ano="2009"
            genero="Ação/Aventura"
            sinopse="Quando um de seus antigos colegas é assassinado, o vigilante mascarado Rorschach descobre um plano para matar e desacreditar todos os super-heróis do passado e do presente. À medida que ele se reconecta com sua antiga legião de combate ao crime, um grupo desorganizado de super-heróis aposentados, dentre os quais somente um possui verdadeiros poderes, Rorschach vislumbra uma ampla e perturbadora conspiração que está ligada ao passado deles e a catastróficas consequências para o futuro."
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieWrapper
            backgroundImage="assets/cartaz-img7.jpg"
            title="Constantine"
            ano="2005"
            genero="Fantasia/Ação"
            sinopse="Contos sobrenaturais baseados nas histórias em quadrinhos Hellblazer. O solitário Constantine tenta garantir seu lugar no paraíso enviando demônios de volta ao inferno, mas seu destino está ligado ao de Angela, uma policial que investiga o suposto suicídio de sua irmã gêmea.."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SliderDry
