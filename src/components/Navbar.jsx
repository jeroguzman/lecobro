import { useState, useEffect } from 'react'
import lecobroLogo from '../assets/lecobro-logo-3d.png'
import logoLogin from '../assets/logo_login.png'
import './Navbar.css'

export default function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = refs.hero?.current
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight
        setIsScrolled(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [refs])

  const handleNavClick = (ref) => {
    scrollToSection(ref)
    setMenuOpen(false)
  }

  const handleNavCobroNet = () => {
    window.open('https://acceso.lecobro.mx/', '_blank')
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button onClick={() => handleNavClick(refs.hero)} className="navbar-logo">
          <img src={isScrolled ? logoLogin : lecobroLogo} alt="LECOBRO Logo" className="navbar-logo-img" />
          <span>lecobro.mx</span>
        </button>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><button onClick={() => handleNavClick(refs.hero)} className="nav-link nav-contact2">INICIO</button></li>
          <li><button onClick={() => handleNavClick(refs.about)} className="nav-link nav-contact2">CONOCENOS A FONDO</button></li>
          <li><button onClick={() => handleNavClick(refs.services)} className="nav-link nav-contact2">SERVICIOS</button></li>
          <li><button onClick={() => handleNavClick(refs.stats)} className="nav-link nav-contact2">BENEFICIOS</button></li>
          <li><button onClick={() => handleNavClick(refs.team)} className="nav-link nav-contact2">NUESTRO EQUIPO</button></li>
          <li><button onClick={() => handleNavCobroNet()} className="nav-link nav-contact2">COBRONET</button></li>
          <li><button onClick={() => handleNavClick(refs.recoveryForm)} className="nav-link nav-contact">INICIAR RECUPERACION</button></li>
        </ul>
      </div>
    </nav>
  )
}
