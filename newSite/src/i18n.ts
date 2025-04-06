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
      titleAbout: 'About Us',
      subtitleOurFirm: 'Our Firm',
      textOurFirmLeft01:
        'Transcending is a finance consulting firm that supports executive teams in the process of making key business decisions regarding management and strategy.',
      textOurFirmLeft02:
        'Through the development of models and financial data analysis, we draw conclusions, reach findings, outline opportunities, make recommendations and give answers that allow us to trace and appropriately support value creating paths that managers and shareholders can follow.',
      textOurFirmRight01:
        'We work with and along management teams to plan and coordinate the execution of crucial projects that will, as an outcome, bring profitable and sustainable growth to companies, in the short, medium, and long term.',
      textOurFirmRight02:
        'We put at the service of our clients our valuable expertise with financial planning and analysis, as well as in mergers and acquisitions, obtained throughout years of experience working for highly renowned local and regional companies.',
      textOurFirmRight03:
        'Since 2016, we have advised companies in different sectors, such as pharmaceutical, agroindustry, logistics, technology, real state, health & fitness and commodities, ranging from startups to large regional enterprises.',
      subtitleOurTeam: 'Our Team',
      textOurTeam:
        'Margarita Reina, founding partner of Transcending, initiated her professional career in 2003 as an investment banking analyst in Colombia. Later, she became part of the financial advisory team to the CEO, at the holding company of the largest financial group in that country. In 2009, she began her MBA studies at INCAE. After earning her master’s degree as valedictorian, she joined one of the most prestigious investment banking firms in Costa Rica as an associate, to then assume the financial planning manager position at a regional pharmaceutical company. Since 2016, she has built up her own consulting business.',
      titleServices: 'Services',
      subtitleValuation: 'Valuation',
      textValuation:
        'We develop financial valuation models that allow us to provide our clients with a market value range for the operation of their interest. Valuation can be used by shareholders to support strategic decisions, as well as in M&A transactions, to determine enterprise value ranges.',
      subtitleMergersAndAcquisitions: 'Mergers And Acquisitions',
      textMergersAndAcquisitions:
        'Partial or total acquisitions and mergers can be an inorganic source of profitable growth for companies, through fresh capital injections from investors, strategic partnerships that create synergies and add value, as well as access to complementary operations and product portfolios. We guide and accompany our clients through and at every stage of these transactions, from valuation of the target to the complete takeover of acquired operations.',
      subtitleFinancialAnalysis: 'Financial Analysis',
      textFinancialAnalysis:
        'We perform insightful financial diagnoses of ongoing operations, business units and variables, that lead to the revelation and meaningful understanding of challenges and struggles that companies may face. We recommend strategies and courses of action, intended to transcend them and follow a thriving path of growth, profitability, sustainability and value creation. We develop financial projection and analysis models that allow management teams to assess in advance and quantify the potential economic impact of restructuring initiatives, business alliances, as well as strategic, commercial, operating, administration and organizational investment projects.',
      subtitleBudgeting: 'Budgeting',
      textBudgeting:
        'We design and build annual budget models, based on business realities and requirements. These allow for a well anticipated and assertive planning of monthly operations within a fiscal term, and also give a clear and concise guide, for the management team to elaborate and execute plans, assess performance and take corrective action at the right time to unexpected scenarios that could arise, avoiding derailing from the initial objectives set in the annual budget.',
      subtitleBoardOfDirectorsConsulting: 'Board Of Directors Consulting',
      textBoardOfDirectorsConsulting:
        'We act as external advisors to the board of directors, board committee members and directors, contributing through feedback, recommendations, supervision, follow up and assessment, to business growth, profitability, liquidity, solvency, sustainability and value creation, as well as the ethics of business management, through and from a financial and strategic approach.',
      titleTestimonials: 'Testimonials',
      titleContactUs: 'Contact Us',
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
      titleAbout: 'Acerca de',
      subtitleOurFirm: 'Nuestra Firma',
      textOurFirmLeft01:
        'Transcending es una firma de consultoría financiera que apoya a los equipos directivos de las organizaciones en los procesos de toma de decisiones gerenciales y estratégicas.',
      textOurFirmLeft02:
        'A través del desarrollo de modelos y análisis financieros, llegamos a conclusiones, identificamos hallazgos, planteamos oportunidades, hacemos recomendaciones y damos respuestas, que permiten a los ejecutivos y empresarios seguir rutas generadoras de valor en sus negocios, adecuadamente soportadas.',
      textOurFirmRight01:
        'Brindamos guía y acompañamiento a los equipos gerenciales en la planificación y coordinación de la ejecución de proyectos críticos para el crecimiento rentable y la sostenibilidad de las operaciones en el corto, mediano y largo plazo.',
      textOurFirmRight02:
        'Ponemos al servicio de nuestros clientes, toda nuestra experiencia en planificación y análisis financiero, así como en fusiones y adquisiciones, en compañías locales y regionales de amplia trayectoria.',
      textOurFirmRight03:
        'Desde el año 2016, hemos asesorado a compañías pertenecientes a diferentes sectores económicos, entre ellos la industria farmacéutica, agropecuaria, logística, tecnológica, inmobiliaria, de health & fitness y de commodities, desde startups hasta grandes empresas regionales.',
      subtitleOurTeam: 'Equipo',
      textOurTeam:
        'Margarita Reina, socia fundadora de Transcending, inició su carrera profesional en el año 2003 como analista de banca de inversión en Colombia. Posteriormente hizo parte del equipo de asesores financieros internos de la dirección general, en la holding del grupo financiero más grande de ese país, hasta 2009, año en que inició su MBA en INCAE, Costa Rica. Después de terminar sus estudios como valedictorian, trabajó como asociada en una de las firmas de banca de inversión de mayor prestigio en la región, para luego asumir el cargo de gerente de planificación financiera en un laboratorio farmacéutico costarricense con presencia regional. A partir del año 2016, inició su propio negocio de consultoría.',
      titleServices: 'Servicios',
      subtitleValuation: 'Valoración Financiera',
      textValuation:
        'Desarrollamos modelos financieros de valoración, a través de los cuales proveemos al cliente con un rango de valor de mercado de la operación de su interés. Los estudios de valoración pueden ser utilizados para fines de análisis interno de decisiones estratégicas por parte de accionistas mayoritarios, así como para definir rangos de negociación de precios, en procesos de adquisición o venta parciales o totales de negocios.',
      subtitleMergersAndAcquisitions: 'Fusiones y adquisiciones',
      textMergersAndAcquisitions:
        'Las adquisiciones o ventas, parciales o totales, de compañías o unidades de negocio, permiten acelerar el crecimiento rentable de las organizaciones de forma inorgánica, a través de la inyección de capital fresco por parte de inversionistas, la incorporación de socios estratégicos que crean valor y aportan sinergias y el apalancamiento en operaciones y portafolios de productos complementarios. Apoyamos a nuestros clientes en todas las etapas de este tipo de transacciones, desde la valoración del target hasta el takeover de las operaciones adquiridas.',
      subtitleFinancialAnalysis: 'Análisis Financiero',
      textFinancialAnalysis:
        'Desarrollamos diagnósticos financieros profundos y esclarecedores, de compañías, operaciones en marcha, unidades y variables de negocio, que llevan a la revelación y el entendimiento de problemas y obstáculos que dificultan la situación financiera de las organizaciones. Recomendamos estrategias y acciones que permiten trascenderlos y seguir una ruta próspera de crecimiento, rentabilidad, sostenibilidad y creación de valor. Elaboramos modelos de proyecciones y análisis financiero, que permiten al equipo gerencial cuantificar y evaluar, de forma anticipada, el potencial impacto económico de reestructuraciones, alianzas, iniciativas y proyectos de inversión, estratégicos, comerciales, operativos, administrativos y organizacionales.',
      subtitleBudgeting: 'Presupuestación',
      textBudgeting:
        'Construimos modelos de presupuestación anual, basados en las realidades y las necesidades prácticas del negocio, que permiten llevar a cabo una planificación acertada y anticipada de las operaciones mensuales dentro de un periodo fiscal, dar una dirección clara al equipo gerencial para la elaboración y ejecución de planes de acción, dar un seguimiento detallado a los resultados que se van obteniendo y tomar medidas correctivas de forma oportuna, ante situaciones imprevistas, causantes de desviaciones de los objetivos inicialmente planteados.',
      subtitleBoardOfDirectorsConsulting: 'Asesoría en Juntas Directivas',
      textBoardOfDirectorsConsulting:
        'Participamos como asesores externos, miembros de comités de Junta Directiva ó Directores, contribuyendo a través de retroalimentación, recomendaciones, supervisión, seguimiento y evaluación, al crecimiento, la rentabilidad, la liquidez, la solvencia, la sostenibilidad y la creación de valor en las operaciones, así como a la ética de los negocios, desde una perspectiva financiera y estratégica.',
      titleTestimonials: 'Testimonios',
      titleContactUs: 'Contáctenos',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  interpolation: { escapeValue: false },
})

export default i18n
