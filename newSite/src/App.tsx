import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import ImageSlider from './components/ImageSlider'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Navbar />
      <h1>My React Slick Slider</h1>
      <ImageSlider />
    </I18nextProvider>
  )
}

export default App
