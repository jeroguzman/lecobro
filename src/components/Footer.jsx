import { Link } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer({ scrollToSection, refs = {} }) {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="526621902506"
        accountName="lecobro.mx"
        statusMessage="Responderemos en breve"
        chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
        avatar="/src/assets/lecobro-logo-3d.png"
        notification
      />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ubicación</h3>
            <p>Blvd. Luis Donaldo Colosio Murrieta 450 <br /> Piso 6, Oficina 6 Edificio Metrocentro <br /> Colonia Villa Satélite CP. 83200 <br /> Hermosillo, Sonora, México</p>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p><FaPhone className="footer-icon" /> <a href="tel:6621902506">662-190-2506</a></p><br />
            <p><FaEnvelope className="footer-icon" /> <a href="mailto:consultoría-juridica@hotmail.es">consultoría-juridica@hotmail.es</a></p>
          </div>
          <div className="footer-section">
            <h3>Servicios</h3>
            <ul>
              <li><button onClick={() => scrollToSection(refs.services)} className="footer-link">Cobranza Extrajudicial</button></li>
              <li><button onClick={() => scrollToSection(refs.services)} className="footer-link">Cobranza Judicial</button></li>
              <li><button onClick={() => scrollToSection(refs.services)} className="footer-link">Auditoría de Portafolio</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Aviso de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 lecobro.mx. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
