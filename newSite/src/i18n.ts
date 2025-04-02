import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      about: 'About Us',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact Us',
      slide01:
        'Financial and strategic consulting for management teams and entrepreneurs',
      slide02:
        'Advice, planning and guidance on implementation of courses of action that add value to organizations',
      slide03: 'Our experience and expertise at your service',
    },
  },
  es: {
    translation: {
      about: 'Acerca de',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contáctenos',
      slide01:
        'Asesoría financiera y estratégica para equipos gerenciales y empresarios',
      slide02:
        'Recomendación, planificación y coordinación de la ejecución de cursos de acción que crean valor para las organizaciones',

      slide03:
        'Toda nuestra experiencia puesta al servicio de nuestros clientes',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: { escapeValue: false },
})

export default i18n
