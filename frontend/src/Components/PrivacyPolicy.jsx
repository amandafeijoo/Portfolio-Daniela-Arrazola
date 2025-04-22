import { useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDatabase,
  faFileSignature,
  faLock,
  faCalendarAlt,
  faEnvelope,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "📌 Introducción",
    icon: faUserShield,
    content: (
      <>
        Tu privacidad es importante para <strong>danielapsicologia.com</strong>.
        En esta declaración de privacidad se explica qué datos personales
        recopilamos de nuestros usuarios y cómo los utilizamos. Te animamos a
        leer detenidamente estos términos antes de facilitar tus datos
        personales en esta web.
        <br />
        <br />
        1️⃣ Los mayores de 14 años pueden usar cualquier funcionalidad sin
        consentimiento de sus padres o tutores.
        <br />
        <br />
        2️⃣En el caso{" "}
        <strong>
          menores de 14 años se requiere el consentimiento de los padres o
          tutores para el tratamiento de sus datos personales.
        </strong>
        En ningún caso se recabarán del menor de edad datos relativos a la
        situación profesional, económica o a la intimidad de los otros miembros
        de la familia, sin el consentimiento de éstos.
        <br />
        <br />
        3️⃣ Si eres menor de 14 años y accediste sin avisar a tus padres, no
        debes compartir ninguna información personal.
        <br />
        <br />
        4️⃣ Esta web cumple con:
        <br />
        ✅ Reglamento (UE) 2016/679 (RGPD)
        <br />
        ✅ Ley Orgánica 3/2018 (LOPDGDD)
        <br />✅ Ley 34/2002 (LSSI)
      </>
    ),
  },
  {
    title: "👥 Responsable del Tratamiento",
    icon: faFileSignature,
    content: (
      <>
        <strong>Responsable del tratamiento de tus datos personales</strong>
        <br />
        <br />
        • Identidad: Daniela Arrázola Benítez
        <br />
        • Nombre comercial: danielapsicologia.com
        <br />
        • NIF/CIF: XXXX
        <br />
        • Dirección: XXX
        <br />• Correo electrónico: danielaarrazolabenitez@gmail.com
      </>
    ),
  },
  {
    title: "📝 ¿Cómo hemos obtenido tus datos?",
    icon: faDatabase,
    content: (
      <>
        Los datos personales que tratamos en{" "}
        <strong>danielapsicologia.com</strong> provienen de:
        <br />
        <br />
        • 📄 Formulario de contacto
        <br />
        • 📩 Formulario de suscripción
        <br />
        • 💬 Comentarios en los posts
        <br />• 🛒 Formulario de venta
      </>
    ),
  },
  {
    title: "🔒 ¿Cuáles son tus derechos cuando nos facilitas tus datos?",
    icon: faLock,
    content: (
      <>
        Cualquier persona tiene derecho a obtener confirmación sobre si en{" "}
        <strong>danielapsicologia.com</strong> estamos tratando sus datos
        personales.
        <br />
        <br />
        ✅ Acceder a tus datos personales.
        <br />
        ✅ Solicitar rectificación o eliminaciónde datos inexactos.
        <br />
        ✅ Limitar el tratamiento de tus datos.
        <br />
        ✅ Oponerte al tratamiento de tus datos.
        <br />
        ✅ Solicitar la portabilidad de tus datos personales.
        <br />
        Los interesados podrán acceder a sus datos personales, así como a
        solicitar la rectificación de los datos inexactos o, en su caso,
        solicitar su supresión cuando, entre otros motivos, los datos ya no sean
        necesarios para los fines que fueron recogidos. En determinadas
        circunstancias, los interesados podrán solicitar la limitación del
        tratamiento de sus datos, en cuyo caso únicamente los conservaré para el
        ejercicio o la defensa de reclamaciones. Al ejercer tu derecho a la
        portabilidad de los datos, tendrás derecho a que los datos personales se
        transmitan directamente de responsable a responsable cuando sea
        técnicamente posible. Los interesados también tendrán derecho a la
        tutela judicial efectiva y a presentar una reclamación ante la autoridad
        de control, en este caso, la Agencia Española de Protección de Datos, si
        consideran que el tratamiento de datos personales que le conciernen
        infringe el Reglamento.
      </>
    ),
  },
  {
    title: "📅 ¿Cuánto tiempo conservamos tus datos?",
    icon: faCalendarAlt,
    content: (
      <>
        • ⏳ Mientras se mantenga la relación mercantil.
        <br />
        • 📅 Hasta que no se solicite su supresión por el interesado.
        <br />• 🔄Periodo a partir de la última confirmación de interés: 1 años.
      </>
    ),
  },
  {
    title: "📩 Contacto y Revocación del Consentimiento",
    icon: faEnvelope,
    content: (
      <>
        Puedes contactarnos en cualquier momento para modificar o eliminar tus
        datos.
        <br />
        <br />
        📧 Correo electrónico: danielaarrazolabenitez@gmail.com
        <br />
        🌍 Web: danielapsicologia.com
      </>
    ),
  },
  {
    title: "🔒 ¿Con qué finalidad tratamos tus datos personales?",
    icon: faLock,
    content: (
      <>
        Cuando un usuario se conecta con esta web por ejemplo para comentar un
        post, mandar un correo al titular, suscribirse o realizar alguna
        contratación, está facilitando información de carácter personal de la
        que es responsable amaiapsicologapamplona.es. Esa información puede
        incluir datos de carácter personal como pueden ser tu dirección IP,
        nombre, dirección física, dirección de correo electrónico, número de
        teléfono, y otra información. Al facilitar esta información, el usuario
        da su consentimiento para que su información sea recopilada, utilizada,
        gestionada y almacenada por amaiapsicologapamplona.es, sólo como se
        describe en el Aviso Legal y en la presente Política de Privacidad. En{" "}
        <strong>danielapsicologia.com</strong> existen diferentes sistemas de
        captura de información personal y trato la información que nos facilitan
        las personas interesadas con el siguiente fin por cada sistema de
        captura (formularios): <br />
        <br />
        ✅Formulario de contacto: La finalidad es mantener la comunicación
        objeto del propio asunto indicado en el formulario de contacto.
        <br />
        ✅ Formulario de suscripción: La finalidad es informar acerca de asuntos
        tanto comerciales como no comerciales.
        <br />
        ✅ Comentarios en los posts: La finalidad es mostrar información sobre
        el comentario al resto de usuarios visitantes, además de permitir la
        comunicación o alertas en caso de así elegirse por el usuario.
        <br />
        ✅Formulario de venta: La finalidad es comenzar la actividad comercial
        determinada en el formulario en cuestión, que proseguirá vía correo
        electrónico.
        <br />
        Existen otras finalidades por la que tratamos tus datos personales:
        <br />
        ✅Para garantizar el cumplimiento de las condiciones de uso y la ley
        aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos
        que ayudan a esta web a garantizar la confidencialidad de los datos
        personales que recoge.
        <br />
        ✅Para apoyar y mejorar los servicios que ofrece esta web.
        <br />
        ✅También se recogen otros datos no identificativos que se obtienen
        mediante algunas cookies que se descargan en el ordenador del usuario
        cuando navega en esta web que detallo en la política de cookies.
        <br />
        El tratamiento de los datos que se lleve a cabo de las personas que se
        hagan seguidoras en las redes sociales de las páginas oficiales{" "}
        <strong>danielapsicologia.com</strong> se regirá por este apartado. Así
        como por aquellas condiciones de uso, políticas de privacidad y
        normativas de acceso que pertenezcan a la red social que proceda en cada
        caso y aceptadas previamente por el usuario de{" "}
        <strong>danielapsicologia.com</strong> Tratará sus datos con las
        finalidades de administrar correctamente su presencia en la red social,
        informando de actividades, productos o servicios de
        <strong>danielapsicologia.com</strong> Así como para cualquier otra
        finalidad que las normativas de las redes sociales permitan. En ningún
        caso utilizaremos los perfiles de seguidores en redes sociales para
        enviar publicidad de manera individual.
        <strong>danielapsicologia.com</strong> no vende, alquila ni cede datos
        de carácter personal que puedan identificar al usuario, ni lo hará en el
        futuro, a terceros sin el consentimiento previo. Sin embargo, en algunos
        casos se pueden realizar colaboraciones con otros profesionales, en esos
        casos, se requerirá consentimiento a los usuarios informando sobre la
        identidad del colaborador y la finalidad de la colaboración. Siempre se
        realizará con los más estrictos estándares de seguridad.
        <br />
        <strong>Legitimación para el tratamiento de tus datos</strong>
        <br />
        La base legal para el tratamiento de sus datos es: el consentimiento.
        Para contactar o realizar comentarios en esta web se requiere el
        consentimiento con esta política de privacidad. La oferta prospectiva o
        comercial de productos y servicios está basada en el consentimiento que
        se le solicita, sin que en ningún caso la retirada de este
        consentimiento condicione la ejecución del contrato de suscripción.
        También la contratación de productos y servicios según los términos y
        condiciones que constan en el aviso legal.
        <br />
      </>
    ),
  },
  {
    title: " ¿A qué destinatarios se comunicarán tus datos?",
    icon: faLock,
    content: (
      <>
        Muchas herramientas que utilizamos para gestionar tus datos son
        contratados por terceros. Para prestar servicios estrictamente
        necesarios para el desarrollo de la actividad,
        <strong>danielapsicologia.com</strong> comparte datos con los siguientes
        prestadores bajo sus correspondientes condiciones de privacidad:
        <br />
        ✅Google Analytics:un servicio analítico de web prestado por Google Inc.
        una compañía de Delaware cuya oficina principal está en 1600
        Amphitheatre Parkway, Mountain View (California), CA 94043, Estados
        Unidos (“Google”). Google Analytics utiliza “cookies”, que son archivos
        de texto ubicados en tu ordenador, para ayudar a{" "}
        <strong>danielapsicologia.com</strong> a analizar el uso que hacen los
        usuarios del sitio web. La información que genera la cookie acerca de su
        uso de <strong>danielapsicologia.com</strong> (incluyendo tu dirección
        IP) será directamente transmitida y archivada por Google en los
        servidores de Estados Unidos.
        <br />
        ✅Facebook Pixel:un servicio analítico de web prestado por Facebook Inc.
        una compañía de California cuyas oficinas principales están en 1 Hacker
        Way, 94025 Menlo Park, United States. Facebook Pixel utiliza “cookies”,
        que son archivos de texto ubicados en tu ordenador, para ayudar a{" "}
        <strong>danielapsicologia.com</strong> a analizar el uso que hacen los
        usuarios del sitio web. La información que genera la cookie acerca de su
        uso de<strong>danielapsicologia.com</strong> (incluyendo tu dirección
        IP) será directamente transmitida y archivada por Facebook Inc. en los
        servidores de Estados Unidos. Servidor:todos los datos almacenados en el
        propio servidor donde se aloja esta web, están almacenados en los data
        center de Contabo GmbH, Aschauer Straße 32a, 81549, Munich,
        <br />
        Alemania. Pero esta empresa no tiene acceso a la consulta de datos ya
        que se trata de un servidor virtual no administrado. Asesoría/Gestoría:
        En el caso de <strong>danielapsicologia.com</strong> no tenemos
        contratado ningún servicio de este tipo que pueda tener acceso a tus
        datos.
        <br />
        ✅Plataforma web:Netifly trata los datos con la finalidad de realizar
        sus servicios de plataforma web a <strong>
          danielapsicologia.com
        </strong>{" "}
        Email marketing: MailChimp, propiedad de The Rocket Science Group LLC,
        con domicilio en EEUU. Más información
        en:https://mailchimp.com/legal/privacy/. The Rocket Science Group LLC
        trata los datos con la finalidad de realizar sus servicios de email
        marketing a <strong>danielapsicologia.com</strong>
        Gestión: Trello, Inc, con domicilio en EEUU. Más información en:
        https://trello.com (Trello, danielapsicologia.com.
        <strong>danielapsicologia.com</strong>
        <br />
        <br />
        <strong>Navegación</strong>
        <br />
        Al navegar por <strong>danielapsicologia.com</strong>se pueden recoger
        datos no identificables, que pueden incluir, direcciones IP, ubicación
        geográfica (aproximadamente), un registro de cómo se utilizan los
        servicios y sitios, y otros datos que no pueden ser utilizados para
        identificar al usuario.
        <br />
        Entre los datos no identificativos están también los relacionados a tus
        hábitos de navegación a través de servicios de terceros.Esta web utiliza
        los siguientes servicios de análisis de terceros:
        <br />
        ✅Google analytics
        <br />
        ✅Pixel de Facebook Utilizamos esta información para analizar
        tendencias, administrar el sitio, rastrear los movimientos de los
        usuarios alrededor del sitio y para recopilar información demográfica
        sobre nuestra base de usuarios en su conjunto.
        <br />
        <br />
        <strong>Secreto y seguridad de los datos</strong>
        <br />
        <strong>danielapsicologia.com</strong> se compromete en el uso y
        tratamiento de los datos incluidos personales de los usuarios,
        respetando su confidencialidad y a utilizarlos de acuerdo con la
        finalidad del mismo, así como a dar cumplimiento a su obligación de
        guardarlos y adaptar todas las medidas para evitar la alteración,
        pérdida, tratamiento o acceso no autorizado, de conformidad con lo
        establecido en la normativa vigente de protección de datos. Esta web
        incluye un certificado SSL.
        <br />
        Se trata de un protocolo de seguridad que hace que tus datos viajen de
        manera íntegra y segura, es decir, la transmisión de los datos entre un
        servidor y usuario web, y en retroalimentación, es totalmente cifrada o
        encriptada.
        <strong>danielapsicologia.com</strong> no puede garantizar la absoluta
        inexpugnabilidad de la red Internet y por tanto la violación de los
        datos mediante accesos fraudulentos a ellos por parte de terceros. Con
        respecto a la confidencialidad del procesamiento,{" "}
        <strong>danielapsicologia.com</strong> se asegurará de que cualquier
        persona que esté autorizada por <strong>danielapsicologia.com</strong>{" "}
        para procesar los datos del cliente (incluido su personal, colaboradores
        y prestadores), estará bajo la obligación apropiada de confidencialidad
        (ya sea un deber contractual o legal).
        <br />
        Cuando se presente algún incidente de seguridad, al darse cuenta
        <strong>danielapsicologia.com</strong>, deberá notificar al Cliente sin
        demoras indebidas y deberá proporcionar información oportuna relacionada
        con el Incidente de Seguridad tal como se conozca o cuando el Cliente lo
        solicite razonablemente.
        <br />
        <br />
        <strong>Exactitud y veracidad de los datos</strong>
        <br />
        Como usuario, eres el único responsable de la veracidad y corrección de
        los datos que remitas a <strong>danielapsicologia.com</strong>{" "}
        exonerando a <strong>danielapsicologia.com</strong>., de cualquier
        responsabilidad al respecto. Los usuarios garantizan y responden, en
        cualquier caso, de la exactitud, vigencia y autenticidad de los datos
        personales facilitados, y se comprometen a mantenerlos debidamente
        actualizados. El usuario acepta proporcionar información completa y
        correcta en el formulario de contacto o suscripción.
        <br />
        <br />
        <strong>Aceptación y consentimiento</strong>
        <br />
        El usuario declara haber sido informado de las condiciones sobre
        protección de datos de carácter personal, aceptando y consintiendo el
        tratamiento de los mismos por parte de
        <strong>danielapsicologia.com</strong> en la forma y para las
        finalidades indicadas en esta política de privacidad.
        <br />
        <br />
        <strong>Revocabilidad</strong>
        <br />
        El consentimiento prestado, tanto para el tratamiento como para la
        cesión de los datos de los interesados, es revocable en cualquier
        momento comunicándolo a <strong>danielapsicologia.com</strong> en los
        términos establecidos en esta Política para el ejercicio de los derechos
        ARCO. Esta revocación en ningún caso tendrá carácter retroactivo.
        Cambios en la política de privacidad
        <strong>danielapsicologia.com</strong>se reserva el derecho a modificar
        la presente política para adaptarla a novedades legislativas o
        jurisprudenciales, así como a prácticas de la industria. En dichos
        supuestos, <strong>danielapsicologia.com</strong> anunciará en esta
        página los cambios introducidos con razonable antelación a su puesta en
        práctica.
        <br />
        <br />
        <strong>Correos comerciales</strong>
        <br />
        De acuerdo con la LSSICE,<strong>danielapsicologia.com</strong> no
        realiza prácticas de SPAM, por lo que no envía correos comerciales por
        vía electrónica que no hayan sido previamente solicitados o autorizados
        por el usuario. En consecuencia, en cada uno de los formularios habidos
        en la web, el usuario tiene la posibilidad de dar su consentimiento
        expreso para recibir el boletín, con independencia de la información
        comercial puntualmente solicitada. Conforme a lo dispuesto en la Ley
        34/2002 de Servicios de la Sociedad de la Información y de comercio
        electrónico, <strong>danielapsicologia.com</strong> se compromete a no
        enviar comunicaciones de carácter comercial sin identificarlas
        debidamente. Este documento ha sido actualizado por última vez el 5 de
        febrero del 2025. De parte del equipo que formamos{" "}
        <strong>danielapsicologia.com</strong> te agradecemos el tiempo dedicado
        en leer esta política de privacidad.
      </>
    ),
  },
  {
    title: "🗣️ Testimonios y Consentimiento",
    icon: faFileSignature,
    content: (
      <>
        En <strong>danielapsicologia.com</strong>, después de recibir una sesión
        de terapia, el usuario podrá recibir un enlace para dejar un testimonio
        voluntario. Este testimonio puede incluir su nombre, su opinión sobre el
        servicio recibido y, opcionalmente, una imagen.
        <br />
        <br />
        ✅ Al rellenar y enviar el testimonio, el usuario otorga su{" "}
        <strong>consentimiento expreso</strong> para que su comentario, junto con
        su nombre y/o imagen, pueda ser publicado en la web{" "}
        <strong>danielapsicologia.com</strong> con fines informativos y
        promocionales.
        <br />
        <br />
        🔒 En todo momento, el usuario puede solicitar la eliminación o
        modificación de su testimonio enviando un correo a:{" "}
        <strong>danielaarrazolabenitez@gmail.com</strong>
        <br />
        <br />
        🛡️ Los testimonios no se publican de forma automática, sino que pasan por
        un proceso de revisión manual por parte del equipo de{" "}
        <strong>danielapsicologia.com</strong>. Solo serán publicados aquellos
        testimonios que hayan sido autorizados y cuyo contenido sea adecuado.
        <br />
        <br />
        📌 El envío del testimonio no implica obligación alguna de publicación, y
        su consentimiento podrá ser revocado en cualquier momento.
      </>
    ),
  }
  
];

const PrivacyPolicy = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "auto",
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
          🛡️ Política de Privacidad
        </Typography>

        {sections.map((section, index) => (
          <Accordion key={index} sx={{ mb: 1, backgroundColor: "#fff" }}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faArrowUp} />}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FontAwesomeIcon
                icon={section.icon}
                style={{ marginRight: "10px", color: "#2c7a7b" }}
              />
              <Typography fontWeight="bold">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ textAlign: "justify" }}>
                {section.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Botón flotante para volver arriba */}
        <Button
          variant="contained"
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#2c7a7b",
            "&:hover": { backgroundColor: "#225e5e" },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </motion.div>
    </Box>
  );
};

export default PrivacyPolicy;
