import { forwardRef } from 'react'
import { FaLock, FaStar, FaBalanceScale } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollAnimation'
import './Stats.css'

const Stats = forwardRef(function Stats(props, ref) {
  const gridRef = useScrollReveal()
  const valuesRef = useScrollReveal()
  const stats = [
    { number: '+25000', label: 'CASOS ATENDIDOS' },
    { number: '94%', label: 'ÉXITO EN MEDIACIÓN' },
    { number: '+15', label: 'AÑOS DE TRAYECTORIA' },
    { number: '100%', label: 'TRANSPARENCIA LEGAL' }
  ]

  const values = [
    { icon: FaLock, text: 'Seguridad Jurídica' },
    { icon: FaStar, text: 'Confianza Absoluta' },
    { icon: FaBalanceScale, text: 'Responsabilidad Civil' }
  ]

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">
        <div className="stats-grid" ref={gridRef}>
          {stats.map((stat, index) => {
            return (
            <div key={index} data-reveal className={`stat-item slide-up`}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            )
          })}
        </div>

        <div className="stats-divider"></div>

        <div className="stats-values" ref={valuesRef}>
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} data-reveal className={`value-item`}>
                <Icon className="value-icon" />
                <span className="value-text">{value.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default Stats
