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
      <div className="text-container">
        <p>{t('textOurFirmLeft')}</p>
        <p>{t('textOurFirmRight')}</p>
      </div>
      <div className="text-container">
        <img src={img_margarita} alt="Slide 1" />
        <p>{t('textOurTeam')}</p>
      </div>
    </div>
  )
}

export default AboutUs
