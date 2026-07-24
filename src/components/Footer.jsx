import { Link } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="526621902506"
        accountName="LECOBRO.mx"
        statusMessage="Responderemos en breve"
        chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
        avatar="/src/assets/lecobro-logo-3d.png"
        notification
      />
      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; 2026 LECOBRO. Todos los derechos reservados.</p>
          <Link to="/privacy">Aviso de Privacidad</Link>
        </div>
      </footer>
    </>
  )
}
