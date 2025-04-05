import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import './App.scss'
import Navbar from './components/NavBar'
import ImageSlider from './components/ImageSlider'
import ModulesContainer from './components/ModulesContainer'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <main>
        <Navbar />
        <ImageSlider />
        <ModulesContainer />
      </main>
    </I18nextProvider>
  )
}

export default App
