import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Aviso de Privacidad</h1>
      </div>

      <div className="privacy-content">
        <p>
          En cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de Particulares (la "Ley") y el Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (el "Reglamento"), lecobro.mx (el "Responsable"), con domicilio en Blvd. Luis Donaldo Colosio Murrieta 450, Piso 6, Oficina 6, Edificio Metrocentro, Colonia Villa Satélite, CP. 83200, Hermosillo, Sonora, México, está consciente de la importancia que tiene el tratamiento legítimo, controlado e informado de los Datos Personales proporcionados por sus clientes, y es el responsable del uso, tratamiento y protección de los mismos. Por lo antes mencionado y a efecto de garantizar la privacidad y el derecho a la autodeterminación informativa de las personas, ponemos a su disposición el presente aviso de privacidad (el "Aviso de Privacidad").
        </p>

        <p>
          Los términos en mayúscula utilizados en el presente Aviso de Privacidad que no se definan en el presente documento, tendrán el significado que les atribuye a los mismos la Ley y/o el Reglamento.
        </p>

        <p>
          Toda vez que los Datos Personales son proporcionados directamente por el Titular, se presumirá que los mismos cumplen con el principio de calidad hasta que éste no manifieste y acredite lo contrario, o bien, hasta que el Responsable cuente con evidencia objetiva que los contradiga. El Responsable podrá realizar las investigaciones y acciones que consideren necesarias, a efecto de comprobar directamente o a través de terceros contratados para ello, dependencia u autoridad, la veracidad de los datos que les fueron proporcionados. No será necesario el consentimiento para el tratamiento de los Datos Personales siempre y cuando se cumpla con uno de los supuestos previstos en el artículo 10 de la Ley.
        </p>

        <p>
          Le informamos que nuestra página web utiliza cookies propias y de terceros, las cuales, nos permiten mejorar el rendimiento y alcance de nuestros servicios.
        </p>

        <h2>¿Qué Datos Personales utilizaremos para estos fines?</h2>
        <p>
          El Responsable puede llegar a recabar de usted los Datos Personales que a continuación se mencionan por categorías: (a) Identificación; (b) Contacto; (c) Laborales; (d) Patrimoniales y/o Financieros; así como imágenes y sonidos captados por nuestras cámaras de video vigilancia.
        </p>

        <h2>¿Recopilamos Datos Personales Sensibles?</h2>
        <p>
          Hacemos de su conocimiento que no recabaremos Datos Personales Sensibles. Sin embargo, de acuerdo al entorno en el que sean tratados los distintos datos y al nivel de riesgo que genere su tratamiento al Titular, podrán ser considerados como Datos Personales Sensibles los datos Financieros, mismos que por ningún motivo podremos disponer de manera unilateral sin previa autorización expresa y por escrito del Titular de dichos datos.
        </p>

        <h2>¿Cuáles son las finalidades del tratamiento de Datos Personales?</h2>
        <p>
          Los Datos Personales que recabamos de usted, podrán ser utilizados para las siguientes finalidades primarias, entre las que se encuentran: (i) Identificación y contacto; (ii) Integración de su expediente como cliente o prospecto de cliente; (iii) Darlo de alta en nuestros sistemas; (iv) Presentarle propuestas de servicios; (v) Prestarle los servicios contratados; (vi) Llevar a cabo procesos de facturación y gestiones de cobranza; (vii) Controlar el acceso y mantener la seguridad en las instalaciones; y (viii) Cumplimiento de obligaciones legales ante autoridades de diversa naturaleza.
        </p>

        <p>
          Adicionalmente, su información personal será utilizada con las siguientes finalidades secundarias: (i) Evaluar la calidad de nuestros servicios; (ii) Invitarlo a eventos organizados por lecobro.mx, o en los que participa; (iii) Informarle sobre las publicaciones en las que colabora y (iv) Promocionar nuestros productos y servicios, contactándolo y realizando eventos con propósitos mercadotécnicos, publicitarios o de prospección comercial. En caso de que no desee que sus Datos Personales sean tratados en las campañas informativas, ponemos a su disposición la opción de "Baja de la lista" en el vínculo habilitado al final de cualquiera de los correos informativos que reciba. Así mismo, podrá manifestar su negativa al tratamiento de sus datos personales para cualquiera de las finalidades secundarias enviando un correo electrónico dirigido a consultoría-juridica@hotmail.es.
        </p>

        <p>
          La negativa para el uso de sus Datos Personales para estas finalidades secundarias, no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
        </p>

        <p>
          Hacemos del conocimiento de los Titulares que, cuando los Datos Personales hayan dejado de ser necesarios para el cumplimiento de las finalidades antes mencionadas o para el cumplimiento de las obligaciones legales a su cargo, procederemos al bloqueo de los mismos, y posteriormente a su cancelación.
        </p>

        <h2>¿Cuáles son las medidas de seguridad en el tratamiento de Datos Personales?</h2>
        <p>
          El Responsable ha adoptado medidas de seguridad, técnicas administrativas y físicas, necesarias para procurar la integridad de sus Datos Personales y evitar su daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Sin embargo, es claro que ninguna transmisión de datos por internet es completamente segura y por ende, el Responsable no puede garantizar que el tratamiento de sus Datos Personales estará libre de todo daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
        </p>

        <p>
          Únicamente el personal autorizado por el Responsable, y que hubieren cumplido y observado los correspondientes requisitos de confidencialidad, podrán participar en el tratamiento de sus Datos Personales. El personal autorizado tiene prohibido permitir el acceso de personas no autorizadas y utilizar sus Datos Personales para los fines distintos a los descritos. La obligación de confidencialidad de las personas que participan en el tratamiento de sus Datos Personales subsiste aún después de terminada la relación con el Responsable.
        </p>

        <h2>¿Con quién compartimos sus Datos Personales?</h2>
        <p>
          Las transferencias nacionales o internacionales de Datos Personales podrán llevarse a cabo sin el consentimiento del Titular cuando se actualice alguno de los supuestos previstos en el artículo 37 de la Ley. Adicionalmente, en este acto el Titular otorga su consentimiento para que el Responsable pueda transferir sus Datos Personales a terceros que colaboran o trabajan con él a fin de dar cumplimiento a las finalidades previstas en el presente Aviso de Privacidad.
        </p>

        <p>
          El Responsable se asegurará, en la medida de lo posible, que dichos terceros mantengan medidas de seguridad, administrativas, técnicas y físicas, adecuadas para resguardar sus Datos Personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado de sus Datos Personales, así como que cumplan con lo establecido en el presente Aviso de Privacidad. El Responsable no cede, vende o transfiere sus Datos Personales, a terceros que no guardan relación con el Responsable.
        </p>

        <h2>Medios para ejercer los Derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)</h2>
        <p>
          El ejercicio de cualquiera de estos derechos, podrá solicitarse por usted o su representante legal, presentando una solicitud vía correo electrónico dirigido a consultoría-juridica@hotmail.es. En la solicitud se deberá incluir: (i) El nombre completo del Titular, (ii) copia de la identificación oficial del Titular (iii) una descripción clara y precisa de los Datos Personales respecto de los cuales ejercitará los derechos ARCO, o indicando brevemente en el escrito a qué se refiere su solicitud de revocación, (iv) así como identificar y/o especificar qué derecho(s) ARCO quiere ejercer. En caso que sea presentada mediante representante legal, se deberá de acreditar la identidad y personalidad de éste último.
        </p>

        <p>
          Es importante que tome en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus Datos Personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que el Responsable no pueda continuar la relación jurídica que exista con usted.
        </p>

        <h2>¿Cómo puedo conocer los cambios en este Aviso de Privacidad?</h2>
        <p>
          El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de distintas causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestro sitio de internet ubicado en lecobro.mx.
        </p>

        <h2>Contacto</h2>
        <p>
          Para cualquier duda o consulta sobre este Aviso de Privacidad, puede contactarnos en:<br/>
          <strong>Teléfono:</strong> 662-680-9802<br/>
          <strong>Correo:</strong> consultoría-juridica@hotmail.es<br/>
          <strong>Sitio Web:</strong> lecobro.mx
        </p>

        <Link to="/" className="back-link">← Volver al inicio</Link>
      </div>
    </div>
  )
}
