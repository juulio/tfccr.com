import { useTranslation } from 'react-i18next'
import './Footer.scss'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="footer">
      <p>{t('copyrightText')}</p>
    </div>
  )
}

export default Footer
