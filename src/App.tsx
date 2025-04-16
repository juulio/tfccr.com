import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import './App.scss'
import Navbar from './components/NavBar'
import ImageSlider from './components/ImageSlider'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Contact from './components/ContactUs'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <ImageSlider />
      <AboutUs />
      <OurServices />
      <Testimonials />
      <Contact />
      <Footer />
    </I18nextProvider>
  )
}

export default App
