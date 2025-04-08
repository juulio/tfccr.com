import { useTranslation } from 'react-i18next'
import './Testimonials.scss'

const Testimonials: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="testimonials">
      <div className="bg-container">
        <div className="slider-container max-width">
          <h2>Testimonials</h2>
          <p>{t('copyrightText')}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
