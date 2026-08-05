import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './TermsAndConditions.css'

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Términos y Condiciones</h1>
      </div>

      <div className="terms-content">
        <h2>1. Aceptación de Términos</h2>
        <p>
          Al acceder y utilizar este sitio web, aceptas estar vinculado por estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestro sitio.
        </p>

        <h2>2. Uso del Sitio Web</h2>
        <p>
          Aceptas utilizar este sitio web únicamente para propósitos legales y de una manera que no viole los derechos de otros ni restrinja o inhiba el uso y disfrute del sitio web por parte de otros. El comportamiento prohibido incluye acosar o causar angustia o inconveniente, transmitir obscenidades u otro contenido ofensivo.
        </p>
        <p>
          No debes modificar, copiar, reproducir, distribuir, transmitir, mostrar, publicar, licenciar, crear trabajos derivados de, transferir o vender información obtenida de este sitio web, excepto para fines personales y no comerciales.
        </p>

        <h2>3. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos, imágenes y software, es propiedad de lecobro.mx o sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor.
        </p>

        <h2>4. Limitación de Responsabilidad</h2>
        <p>
          lecobro.mx no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la incapacidad de usar el contenido o los servicios, incluso si hemos sido aconsejados de la posibilidad de tales daños.
        </p>

        <h2>5. Servicios Legales</h2>
        <p>
          Los servicios prestados por lecobro.mx están sujetos a las leyes y regulaciones aplicables en México. No garantizamos resultados específicos en ningún asunto legal. Cada caso es único y los resultados dependerán de circunstancias individuales.
        </p>

        <h2>6. Enlaces a Terceros</h2>
        <p>
          Este sitio web puede contener enlaces a sitios web de terceros. lecobro.mx no es responsable por el contenido, precisión, o prácticas de estos sitios externos. El acceso a cualquier sitio web externo está bajo tu propio riesgo.
        </p>

        <h2>7. Disclaimers</h2>
        <p>
          El contenido de este sitio web se proporciona "tal como está" sin garantías de ningún tipo. lecobro.mx rechaza expresamente todas las garantías, incluyendo garantías implícitas de comerciabilidad, idoneidad para un propósito particular y no infracción.
        </p>

        <h2>8. Cambios en los Términos</h2>
        <p>
          lecobro.mx se reserva el derecho de cambiar estos términos y condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de la publicación. Tu uso continuado del sitio web después de la publicación de cambios constituye tu aceptación de los términos modificados.
        </p>

        <h2>9. Contacto</h2>
        <p>
          Si tienes preguntas sobre estos términos y condiciones, por favor contacta con nosotros a través de los medios disponibles en nuestra página web.
        </p>

        <Link to="/" className="back-link">← Volver al inicio</Link>
      </div>
    </div>
  )
}
