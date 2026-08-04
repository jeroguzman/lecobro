import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import heroImage from '../assets/hero-bg.jpg'
import lecobroLogo from '../assets/lecobro-logo-3d.png'

const Hero = forwardRef(function Hero({ scrollToSection, refs }, ref) {
  return (
    <section className="hero" ref={ref}>

      <div className="hero-background">
        <div className="hero-image-placeholder" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-overlay"></div>

        <div className="hero-team-placeholder">
          <div className="team-image"></div>
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            RECUPERAMOS TU<br />
            <span className="highlight">CARTERA 100% LEGAL</span>
          </h1>
          <p className="hero-description">
            Especialistas jurídicos en rescate y cobro de cartera vencida comercial, empresarial y personal. Sea cual sea la situación, nuestros expertos te resolvemos.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection(refs.recoveryForm)} className="btn btn-primary">
              EVALUAR CARTERA GRATIS
            </button>
            <button onClick={() => scrollToSection(refs.services)} className="btn btn-secondary">
              VER SOLUCIONES
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-icon-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={lecobroLogo}
            alt="LECOBRO Logo"
            className="logo-hero"
            animate={{ y: [-25, 0, -25] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

    </section>
  )
})

export default Hero
