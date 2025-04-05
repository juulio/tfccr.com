import { useTranslation } from 'react-i18next'
import './OurServices.scss'

import img_margarita from '../../public/img_margarita.webp'

const AboutUs: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="our-services module">
      <h2>{t('titleServices')}</h2>
      <h3>{t('subtitleValuation')}</h3>
      <div className="text-container-column">
        <p>{t('textValuation')}</p>
      </div>
      <h3>{t('subtitleMergersAndAcquisitions')}</h3>
      <div className="text-container-column">
        <p>{t('textMergersAndAcquisitions')}</p>
      </div>
      <h3>{t('subtitleFinancialAnalysis')}</h3>
      <div className="text-container-column">
        <p>{t('textFinancialAnalysis')}</p>
      </div>
      <h3>{t('subtitleBudgeting')}</h3>
      <div className="text-container-column">
        <p>{t('textBudgeting')}</p>
      </div>
      <h3>{t('subtitleBoardOfDirectorsConsulting')}</h3>
      <div className="text-container-column">
        <p>{t('textBoardOfDirectorsConsulting')}</p>
      </div>
      <div className="text-container-column">
        <img src={img_margarita} alt="Slide 1" />
        <p>{t('textOurTeam')}</p>
      </div>
    </div>
  )
}

export default AboutUs
