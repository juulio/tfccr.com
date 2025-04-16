import { useTranslation } from 'react-i18next'
import './OurServices.scss'

import img_valoracionFinanciera from '../../public/servicio_valoracion_financiera.webp'
import img_fusionesAdquisiciones from '../../public/servicio_fusiones_adquisiciones.webp'
import img_analisisFinanciero from '../../public/servicio_analisis_financiero.webp'
import img_presupuestacion from '../../public/servicio_presupuestacion.webp'
import img_servicioAsesoriaJuntasDirectivas from '../../public/servicio_asesoria_juntas_directivas.webp'

const AboutUs: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div id="services" className="our-services module max-width">
      <h2>{t('titleServices')}</h2>
      <section>
        <div className="column mobileItem01">
          <img src={img_valoracionFinanciera} alt="Slide 1" />
        </div>
        <div className="column mobileItem02">
          <h3>{t('subtitleValuation')}</h3>
          <p>{t('textValuation')}</p>
        </div>
        <div className="column mobileItem03">
          <img src={img_fusionesAdquisiciones} alt="Slide 1" />
        </div>
        <div className="column mobileItem04">
          <h3>{t('subtitleMergersAndAcquisitions')}</h3>
          <p>{t('textMergersAndAcquisitions')}</p>
        </div>
        <div className="column mobileItem05">
          <img src={img_analisisFinanciero} alt="Slide 1" />
        </div>
        <div className="column mobileItem06">
          <h3>{t('subtitleFinancialAnalysis')}</h3>
          <p>{t('textFinancialAnalysis')}</p>
        </div>
        <div className="column mobileItem07">
          <img src={img_presupuestacion} alt="Slide 1" />
        </div>
        <div className="column mobileItem08">
          <h3>{t('subtitleBudgeting')}</h3>
          <p>{t('textBudgeting')}</p>
        </div>
        <div className="column mobileItem09">
          <img src={img_servicioAsesoriaJuntasDirectivas} alt="Slide 1" />
        </div>
        <div className="column mobileItem10">
          <h3>{t('subtitleBoardOfDirectorsConsulting')}</h3>
          <p>{t('textBoardOfDirectorsConsulting')}</p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
