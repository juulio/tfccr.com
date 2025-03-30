import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import './NavBar.css'

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
        {/* Logo Image (Left Side) */}
        <a href="/" className="logo">
          <img src="/logo.svg" alt="Logo" className="logo-img" />
        </a>
        {/* Hamburger Menu Button (Mobile) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenuIcon width={24} height={24} />
        </button>

        {/* Menu Items */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#">{t('home')}</a>
          </li>
          <li>
            <a href="#">{t('about')}</a>
          </li>
          <li>
            <a href="#">{t('contact')}</a>
          </li>
          <li>
            <button className="lang-btn" onClick={toggleLanguage}>
              <img
                src={i18n.language === 'en' ? '/es-flag.svg' : '/en-flag.svg'}
                alt="flag"
                className="flag-icon"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
