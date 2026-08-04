import { useState, useEffect, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Testimonials.css'

const Testimonials = forwardRef(function Testimonials(props, ref) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const containerRef = useScrollAnimation()

  const testimonials = [
    {
      text: 'Gracias a LECOBRO recuperamos el 85% de la cartera vencida de créditos vía nómina del sector magisterial en tiempo récord.',
      author: 'Director de Riesgos, Financiera del Norte'
    },
    {
      text: 'El trato de su embajador institucional es impecable. Logran la conciliación protegiendo la reputación corporativa en todo momento.',
      author: 'Gerente Legal, Soluciones de Capital S.A.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container" ref={containerRef}>
        <h2 className="testimonials-title">Beneficios Respaldados por Clientes</h2>
        <p className="testimonials-subtitle">Lo que las grandes corporaciones y financieras opinan de nuestra gestión.</p>

        <motion.div
          key={activeTestimonial}
          className="testimonial-card card-animated"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="testimonial-text">"{testimonials[activeTestimonial].text}"</p>
          <p className="testimonial-author">— {testimonials[activeTestimonial].author}</p>
        </motion.div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`Testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Testimonials
