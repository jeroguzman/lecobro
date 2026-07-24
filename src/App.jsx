import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import LogoSection from './components/LogoSection'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import AppLogin from './components/AppLogin'
import RecoveryForm from './components/RecoveryForm'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import heroImage from './assets/hero-bg.jpg'
import './App.css'

function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const recoveryFormRef = useRef(null)
  const appLoginRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          hero: heroRef,
          about: aboutRef,
          services: servicesRef,
          stats: statsRef,
          testimonials: testimonialsRef,
          recoveryForm: recoveryFormRef,
          appLogin: appLoginRef
        }}
      />
      <div className="hero-section-wrapper" style={{ backgroundImage: `url(${heroImage})` }}>
        <Hero ref={heroRef} scrollToSection={scrollToSection} refs={{ recoveryForm: recoveryFormRef, services: servicesRef }} />
      </div>
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <LogoSection />
      <Stats ref={statsRef} />
      <Testimonials ref={testimonialsRef} />
      <RecoveryForm ref={recoveryFormRef} />
      <AppLogin ref={appLoginRef} />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
