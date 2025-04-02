import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import './NavBar.scss'
import transcendingLogo from '/logo.svg'
import spanishFlag from '/es-flag.svg'
import englishFlag from '/en-flag.svg'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle the language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Image */}
        <a href="/" className="logo">
          <img src={transcendingLogo} alt="Logo" className="logo-img" />
        </a>

        <div id="body-overlay" className={`${isOpen ? 'open' : ''}`}></div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Hamburger Menu Button (Mobile) */}
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
          </button>

          {/* Menu Items */}
          <ul>
            <li>
              <a href="#">{t('about')}</a>
            </li>
            <li>
              <a href="#">{t('services')}</a>
            </li>
            <li>
              <a href="#">{t('testimonials')}</a>
            </li>
            <li>
              <a href="#">{t('contact')}</a>
            </li>
            <li>
              <button className="lang-btn" onClick={toggleLanguage}>
                <img
                  src={i18n.language === 'en' ? spanishFlag : englishFlag}
                  alt="flag"
                  className="flag-icon"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
