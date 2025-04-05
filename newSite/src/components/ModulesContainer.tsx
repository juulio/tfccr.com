import AboutUs from './AboutUs'
import OurServices from './OurServices'
import './ModulesContainer.scss'

const ModulesContainer: React.FC = () => {
  return (
    <div className="modules-container">
      <AboutUs />
      <OurServices />
    </div>
  )
}
export default ModulesContainer
