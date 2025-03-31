import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import './App.css'
import Navbar from './components/NavBar'
import ImageSlider from './components/ImageSlider'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <ImageSlider />
      <h1>Acerca de</h1>
    </I18nextProvider>
  )
}

export default App
