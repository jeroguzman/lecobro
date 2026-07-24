import lecobroLogo from '../assets/lecobro-logo-3d.png'
import './Navbar.css'

export default function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button onClick={() => scrollToSection(refs.hero)} className="navbar-logo">
          <img src={lecobroLogo} alt="LECOBRO Logo" className="navbar-logo-img" />
          <span>LECOBRO.mx</span>
        </button>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection(refs.hero)} className="nav-link nav-contact2">INICIO</button></li>
          <li><button onClick={() => scrollToSection(refs.about)} className="nav-link nav-contact2">CONOCENOS A FONDO</button></li>
          <li><button onClick={() => scrollToSection(refs.services)} className="nav-link nav-contact2">SERVICIOS</button></li>
          <li><button onClick={() => scrollToSection(refs.stats)} className="nav-link nav-contact2">BENEFICIOS</button></li>
          <li><button onClick={() => scrollToSection(refs.appLogin)} className="nav-link nav-contact2">COBRONET</button></li>
          <li><button onClick={() => scrollToSection(refs.recoveryForm)} className="nav-link nav-contact">INICIAR RECUPERACION</button></li>
        </ul>
      </div>
    </nav>
  )
}
