import { useState, forwardRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './RecoveryForm.css'

const RecoveryForm = forwardRef(function RecoveryForm(props, ref) {
  const formRef = useScrollAnimation({ delay: 200 })
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    amount: '',
    details: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = '526623546361'
    const message = `¡Hola lecobro.mx! Solicitud de Asesoría Premium: • *Nombre:* ${formData.name} • *Financiera:* ${formData.company} • *Monto de Cartera:* ${formData.amount} • *Detalles:* ${formData.details}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="recovery-form-section" ref={ref}>
      <div className="form-container">
        <h2 className="form-title">Inicia tu Trámite de Recuperación</h2>
        <p className="form-subtitle">Llena el formulario formal y un experto se comunicará contigo vía WhatsApp de inmediato.</p>

        <form className="recovery-form card-animated animate-in slide-up" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo / Representante Legal</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej. Lic. Alejandro Pérez"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Nombre de la Financiera / Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Ej. Financiera Avanza"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Monto Estimado de Cartera a Recuperar</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Ej. $350,000"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">Detalles de la Situación</label>
            <textarea
              id="details"
              name="details"
              placeholder="Describe brevemente el estado de la cartera..."
              value={formData.details}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
            <span className="form-hint">Completa este campo</span>
          </div>

          <button type="submit" className="form-submit">
            <FaWhatsapp className="submit-icon" /> Enviar a WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
})

export default RecoveryForm
