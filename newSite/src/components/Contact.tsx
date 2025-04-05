import { useTranslation } from 'react-i18next'
import './Contact.scss'

import img_margarita from '../../public/img_margarita.webp'

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="our-services module">
      <h2>{t('titleContactUs')}</h2>
    </div>
  )
}

export default Contact
