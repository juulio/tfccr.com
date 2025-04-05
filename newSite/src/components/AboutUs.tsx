import React from 'react'
import { useTranslation } from 'react-i18next'
import './AboutUs.scss'

import img_margarita from '../../public/img_margarita.webp'

const AboutUs: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="about-us module">
      <h2>{t('titleAbout')}</h2>
      <h3>{t('subtitleOurFirm')}</h3>
      <div className="columns-container">
        <div className="column">
          <p>{t('textOurFirmLeft01')}</p>
          <p>{t('textOurFirmLeft02')}</p>
        </div>
        <div className="column">
          <p>{t('textOurFirmRight01')}</p>
          <p>{t('textOurFirmRight02')}</p>
          <p>{t('textOurFirmRight03')}</p>
        </div>
        <div className="column">
          <img src={img_margarita} alt="Slide 1" />
        </div>
        <div className="column">
          <h3>{t('subtitleOurTeam')}</h3>
          <p>{t('textOurTeam')}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
