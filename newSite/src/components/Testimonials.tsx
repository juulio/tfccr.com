import { useTranslation } from 'react-i18next'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Testimonials.scss'

const Testimonials: React.FC = () => {
  const { t, ready } = useTranslation()
  if (!ready) return 'loading translations...'

  const testimonials: object = t('testimonialsSlider', {
    returnObjects: true,
  })
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
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
    <div className="testimonials">
      <div className="bg-container">
        <div className="slider-container max-width">
          <h2>Testimonials</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial: string, index: number) => (
              <div key={index}>
                <p>{testimonial.text}</p>
                <p className="testimonial-person-name">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
