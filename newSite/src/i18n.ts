import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
    },
  },
  es: {
    translation: {
      home: 'Inicio',
      about: 'Acerca',
      contact: 'Contacto',
      language: 'Idioma',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: { escapeValue: false },
})

export default i18n
