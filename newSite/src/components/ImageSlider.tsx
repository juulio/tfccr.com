import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.css'
import slider00_asesoriaFinanciera from '/slider_asesoria_financiera.webp'
import slider01_ejecucionCursos from '/slider_ejecucion_cursos.webp'
import slider02_experiencia from '/slider_experiencia.webp'

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slider00_asesoriaFinanciera} alt="Slide 1" />
        </div>
        <div>
          <img src={slider01_ejecucionCursos} alt="Slide 2" />
        </div>
        <div>
          <img src={slider02_experiencia} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
