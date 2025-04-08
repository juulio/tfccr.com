import { useTranslation } from 'react-i18next'
import './Testimonials.scss'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.scss'
import slider_asesoriaFinanciera from '/slider_asesoria_financiera.webp'

const Testimonials: React.FC = () => {
  const { t } = useTranslation()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="testimonials">
      <div className="bg-container">
        <div className="slider-container max-width">
          <h2>Testimonials</h2>
          <Slider {...settings}>
            <div>
              <p>
                Tuve la oportunidad de trabajar con Margarita durante 5 años, en
                los que hizo parte del equipo de asesoría interna de la
                Presidencia de Grupo Aval. En este periodo pude apreciar su
                talento, la calidad de su trabajo y el profundo conocimiento que
                adquirió sobre el sector financiero. Es una profesional que
                aporta gran valor a las organizaciones con las cuales colabora.
              </p>
              <p className="testimonial-person-name">
                Mauricio Cárdenas Müller
              </p>
              <p>
                Gerente General de la Organización Luis Carlos Sarmiento Angulo
              </p>
            </div>
            <div>
              <p>
                Agradezco a Margarita por su valiosa gestión en calidad de
                Asesora Externa desde 2020 y como miembro del Comité de Finanzas
                de nuestro Gobierno Corporativo desde 2021. Su guía y
                acompañamiento en la planificación, el control y la optimización
                del gasto, han sido de gran relevancia para nuestra compañía.
                Asimismo, su trabajo de análisis y diagnóstico de nuestras
                operaciones y sus recomendaciones sobre diferentes variables
                estratégicas del negocio, nos han permitido enfocar nuestros
                esfuerzos en la toma de decisiones críticas para la
                sostenibilidad de nuestra empresa.
              </p>
              <p className="testimonial-person-name">Jaime Gurdián Moreno</p>
              <p> Director General Agrosuperior</p>
            </div>
            <div>
              <p>
                Haber podido trabajar al lado de Margarita en distintas
                oportunidades y en diferentes proyectos ha sido un verdadero
                placer. Margarita no es solamente una persona excepcionalmente
                talentosa, sino que su conocimiento, su capacidad de trabajo y
                su ética son ciertamente notables. Además de un conocimiento
                técnico profundo que no deja lugar a dudas, Margarita siempre
                hace su trabajo con un enorme compromiso y gran dedicación.
                Todos los clientes y colaboradores con los que he tenido la
                oportunidad de intercambiar opiniones, concuerdan en calificar
                el desempeño de Margarita como extraordinario y ejemplar.
              </p>
              <p className="testimonial-person-name">
                Mauricio Jenkins Coronas, Ph.D.
              </p>
              <p>Profesor Pleno INCAE Business School, Consultor empresarial</p>
            </div>
            <div>
              <p>
                Trabajé con Margarita durante 6 meses en un proyecto de
                consultoría. Ella demostró contar una capacidad analítica fuerte
                unida a un muy buen manejo de las bases de datos de la
                información financiera de la empresa. El análisis realizado, fue
                el principal insumo en el cual nos basamos para elaborar el plan
                de acción presentado al cliente.
              </p>
              <p className="testimonial-person-name">Oscar Rodríguez Ulloa</p>
              <p>
                Gerente General de la Organización Luis Carlos Sarmiento Angulo
              </p>
            </div>
            <div>
              <p>
                Margarita es una de las profesionales más serias y comprometidas
                que he conocido a lo largo de mi carrera. Trabajamos juntos en
                la holding company del mayor grupo financiero de Colombia e
                interactuar con ella siempre fue un privilegio a nivel
                intelectual y personal, así como una oportunidad para aprender
                de sus amplias capacidades. Su habilidad para convertir cifras y
                análisis numéricos en robustas herramientas financieras para
                soportar decisiones corporativas es tan admirable como su
                disciplina, su claridad comunicativa y su fluidez para diseñar y
                liderar la implementación de acertadas estrategias empresariales
              </p>
              <p className="testimonial-person-name">
                Diego Jaramillo Echeverry
              </p>
              <p>CFO NEORIS</p>
            </div>
            <div>
              <p>
                Trabajar con Margarita ha sido fundamental para ordenar la
                operación de nuestro negocio de academias de Karate y construir
                su plan de expansión. Su asesoría en estrategias financieras nos
                ha permitido trascender y transformarnos, siguiendo un modelo de
                franquicias en la región centroamericana y llevando el valor de
                mercado en dólares de Tamashii hacia un potencial de siete
                cifras. Gracias a su ayuda, nos hemos posicionado como una de
                las pymes de mayor impacto positivo en la región. Recomiendo sin
                reservas la asesoría de Transcending Financial Consultants, a
                aquellos empresarios que deseen comprender a fondo las
                necesidades de su negocio para lograr un crecimiento sostenible,
                la optimización de su rentabilidad y la maximización de su
                valor.
              </p>
              <p className="testimonial-person-name">
                Mauricio Carranza Delgado
              </p>
              <p>Director Tamashii Martial Arts</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
