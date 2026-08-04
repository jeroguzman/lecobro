import { Link } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './Footer.css'

export default function Footer({ scrollToSection, refs = {} }) {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="526623546361"
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
            <p>Blvd. Luis Donaldo Colosio Murrieta 450, Piso 6, Oficina 6<br/>Edificio Metrocentro, Colonia Villa Satélite<br/>CP. 83200, Hermosillo, Sonora, México</p>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p><a href="tel:6626809802">662-680-9802</a></p>
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
              <li><a href="#terminos">Términos y Condiciones</a></li>
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
