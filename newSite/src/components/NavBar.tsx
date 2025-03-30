import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import './NavBar.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

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
          <img src="/logo.svg" alt="Logo" className="logo-img" />
        </a>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <Cross2Icon style={{ color: '#8e0047', fontSize: '30px' }} />
          ) : (
            <HamburgerMenuIcon style={{ color: '#8e0047', fontSize: '30px' }} />
          )}
        </button>

        {/* Menu Items */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
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
                src={i18n.language === 'en' ? '/es-flag.svg' : '/en-flag.svg'}
                alt="flag"
                className="flag-icon"
              />
            </button>
          </li>
        </ul>

        {/* <div className="hamburger-menu" onClick={toggleMenu}>
          <div
            className={`line ${isOpen ? 'open' : ''}`}
            style={{ backgroundColor: '#8e0047' }}
          ></div>
          <div
            className={`line ${isOpen ? 'open' : ''}`}
            style={{ backgroundColor: '#8e0047' }}
          ></div>
          <div
            className={`line ${isOpen ? 'open' : ''}`}
            style={{ backgroundColor: '#8e0047' }}
          ></div>
        </div> */}

        {/* Slide-in Menu */}
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#about Us">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact-us">Contact</a>
            </li>
            <li className="language-toggle">
              <button>EN / ES</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
