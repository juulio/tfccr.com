import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.scss'
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
    autoplay: false,
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
          <h2>
            Asesoria financiera y<br />
            estratégica para equipos
            <br />
            gerenciales y empresarios
          </h2>
        </div>
        <div>
          <img src={slider01_ejecucionCursos} alt="Slide 2" />
          <h2>
            Recomendación, planificación y coordinación de la ejecución de
            cursos de acción que crean valor para las organizaciones
          </h2>
        </div>
        <div>
          <img src={slider02_experiencia} alt="Slide 3" />
          <h2>
            Toda nuestra experiencia puesta al servicio de
            <br />
            nuestros clientes
          </h2>
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
