import { useTranslation } from 'react-i18next'
import './ContactUs.scss'

import logo_footer from '../../public/logo-footer.svg'
import svg_phone from '../../public/phone-solid.svg'
import svg_envelope from '../../public/envelope-solid.svg'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div id="contact" className="contact-us">
      <div className="bg-container">
        <section className="max-width module">
          <div className="column footer-logo-container">
            <img src={logo_footer} alt="Transcending Logo" />
          </div>
          <div className="column">
            <h4>{t('titleContactUs')}</h4>
            <p>
              <img src={svg_phone} alt="Phone" />
              <a
                href="https://api.whatsapp.com/send/?phone=50672817421"
                target="_blank"
                rel="noreferrer noopener"
              >
                (506) 7281-7421
              </a>
            </p>

            <p>
              <img src={svg_envelope} alt="Envelope" />
              <a
                href="mailto:contact@tfccr.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                contact@tfccr.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
