import { forwardRef } from 'react'
import { FaShieldAlt, FaUsers, FaBolt } from 'react-icons/fa'
import './About.css'

const About = forwardRef(function About(props, ref) {
  return (
    <section className="about-section" ref={ref}>
      <div className="about-container">
        <h2 className="about-title">Conoce a LECOBRO</h2>
        <p className="about-subtitle">Tu aliado e intermediario institucional de confianza, comprometido con la ética y la efectividad jurídica.</p>

        <div className="about-card">
          <div className="about-icon">
            <FaShieldAlt />
          </div>
          <h3 className="card-title">Mediación Legal de Nivel Corporativo</h3>
          <p className="card-text">
            Nuestra marca y personaje institucional operan como embajadores diplomáticos entre tu financiera y el cliente en mora, logrando acuerdos equilibrados sin desganar tu imagen comercial.
          </p>

          <div className="benefits-list">
            <div className="benefit-item">
              <FaUsers className="benefit-icon" />
              <div>
                <h4>Blindaje de Marca</h4>
                <p>Cuidamos la reputación e integridad de tu empresa en cada etapa del proceso de cobro.</p>
              </div>
            </div>
            <div className="benefit-item">
              <FaBolt className="benefit-icon" />
              <div>
                <h4>Experiencia en Negociación y Ejecución de Embargos</h4>
                <p>Expertos en destrabar carteras complejas y casos difíciles de cobrar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
