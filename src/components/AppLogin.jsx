import { useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import lecobroLogo from '../assets/lecobro-logo-3d.png'
import './AppLogin.css'

const AppLogin = forwardRef(function AppLogin(props, ref) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
  }

  return (
    <section className="app-login" ref={ref}>
      <div className="login-container">
        <motion.div
          className="login-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="app-logo-container">
            <motion.img
              src={lecobroLogo}
              alt="LECOBRO Logo"
              className="app-logo"
              animate={{ y: [-12, 0, -12] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <h2>MI APP</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">ENTRAR</button>
          </form>

          <p className="login-footer">
            ¿No tienes cuenta? <a href="#signup">Crear una</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
})

export default AppLogin
