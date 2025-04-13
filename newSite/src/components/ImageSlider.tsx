import React from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.scss'
import slider_asesoriaFinanciera from '/slider_asesoria_financiera.webp'
import slider_ejecucionCursos from '/slider_ejecucion_cursos.webp'
import slider_experiencia from '/slider_experiencia.webp'

const ImageSlider: React.FC = () => {
  const { t } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container max-width">
      <Slider {...settings}>
        <div id="sliderElement00">
          <img src={slider_asesoriaFinanciera} alt="Slide 1" />
          <h3>{t('slide01')}</h3>
        </div>
        <div id="sliderElement01">
          <img src={slider_ejecucionCursos} alt="Slide 2" />
          <h3>{t('slide02')}</h3>
        </div>
        <div id="sliderElement02">
          <img src={slider_experiencia} alt="Slide 3" />
          <h3>{t('slide03')}</h3>
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
