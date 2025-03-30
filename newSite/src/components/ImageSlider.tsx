import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider
