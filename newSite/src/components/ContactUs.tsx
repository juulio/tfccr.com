import { useTranslation } from 'react-i18next'
import './ContactUs.scss'

import logo_footer from '../../public/logo-footer.svg'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="contact-us">
      <h2>{t('titleContactUs')}</h2>
      <div className="bg-container">
        <section className="max-width module">
          <div className="column">
            <img src={logo_footer} alt="Transcending Logo" />
          </div>
          <div className="column">
            <h4>Contact Us</h4>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
