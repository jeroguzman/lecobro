import { forwardRef } from 'react'
import { FaPhone, FaGavel, FaEye } from 'react-icons/fa'
import './Services.css'

const Services = forwardRef(function Services(props, ref) {
  const services = [
    {
      icon: FaPhone,
      title: 'Cobranza Extrajudicial',
      description: 'Estrategias de mediación rápida, reestructuras contractuales y convenios oportunos antes de instancias judiciales.'
    },
    {
      icon: FaGavel,
      title: 'Cobranza Judicial',
      description: 'Litigio especializado en materia mercantil, demandas ejecutivas, dictaminación y ejecución percial de garantías.'
    },
    {
      icon: FaEye,
      title: 'Auditoría de Portafolio',
      description: 'Análisis minucioso del nivel de riesgo, viabilidad jurídica y depuración profunda de carteras vendidas.'
    }
  ]

  return (
    <section className="services-section" ref={ref}>
      <div className="services-container">
        <h2 className="services-title">Servicios Legales Integrales</h2>
        <p className="services-subtitle">Estrategias estructuradas para el retorno inmediato de tu capital.</p>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default Services
