import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Astro Maya. Qué datos se recopilan al usar el sitio y crear una cuenta, para qué se usan, con quién se comparten y cómo pedir su eliminación.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://astromaya.neuralcodelab.com/privacidad" },
};

const p = "text-sm text-[#5e6673] leading-relaxed";
const ul = "list-disc list-inside text-sm text-[#5e6673] space-y-1.5";
const h2 = "text-xl font-bold text-[#0e5c4a] mb-3";
const h3 = "font-semibold text-[#14181f] text-sm mt-4 mb-2";
const a = "text-[#0e5c4a] underline";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[#f6f5f1]">
      <Header />
      <section className="bg-[#0e5c4a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#8a6410] font-semibold text-xs uppercase tracking-widest mb-2">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Política de Privacidad</h1>
          <p className="text-white/60 mt-2 text-sm">Última actualización: 6 de noviembre de 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#e4e2da] p-8 md:p-12 space-y-8 text-[#14181f]">

          <div className="p-4 bg-[#d9a62b]/10 border border-[#d9a62b]/30 rounded-lg">
            <p className="text-sm text-[#14181f] font-medium">
              En resumen: para usar las lecciones públicas no necesita cuenta. Si crea una cuenta, guardamos su nombre, su correo y su avance en las lecciones para que pueda continuar donde se quedó.
              <strong> No vendemos sus datos ni los usamos para publicidad.</strong> Puede pedir que se elimine su cuenta en cualquier momento escribiendo a{' '}
              <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>.
            </p>
          </div>

          <section>
            <h2 className={h2}>1. Quién es el responsable</h2>
            <p className={p}>
              <strong>Astro Maya</strong> es un proyecto educativo independiente de NeuralCodeLab, creado y administrado por una persona individual:
              <strong> Iran Lewis Ortiz</strong>, desde Guatemala. Astro Maya no es una institución, empresa, universidad ni entidad oficial, y no cuenta con oficinas ni sedes físicas.
              En esta política, «nosotros» se refiere a esa persona responsable del sitio.
            </p>
            <p className={`${p} mt-3`}>
              Para cualquier asunto relacionado con sus datos, el único medio de contacto es el correo{' '}
              <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Datos que recopilamos</h2>

            <h3 className={h3}>a) Si crea una cuenta con correo y contraseña</h3>
            <ul className={ul}>
              <li>Nombre (el que usted escribe al registrarse).</li>
              <li>Correo electrónico.</li>
              <li>Contraseña, que se guarda únicamente en forma cifrada (hash); nadie puede leerla en texto normal.</li>
            </ul>

            <h3 className={h3}>b) Si inicia sesión con Google</h3>
            <p className={`${p} mb-2`}>Google nos comparte, con su autorización:</p>
            <ul className={ul}>
              <li>Nombre, correo electrónico y foto de perfil de su cuenta de Google.</li>
              <li>El identificador de su cuenta de Google y los códigos de acceso que Google entrega para completar el inicio de sesión.</li>
            </ul>
            <p className={`${p} mt-2`}>No tenemos acceso a su contraseña de Google, a su correo de Gmail ni a otros servicios de su cuenta de Google.</p>

            <h3 className={h3}>c) Datos de sesión</h3>
            <ul className={ul}>
              <li>Cada vez que inicia sesión se registra la dirección IP y el tipo de navegador y dispositivo desde el que entra, junto con la fecha de la sesión.</li>
            </ul>

            <h3 className={h3}>d) Su avance en la plataforma (solo con cuenta)</h3>
            <ul className={ul}>
              <li>Rutas de aprendizaje que crea, idioma elegido y tareas completadas.</li>
              <li>Avance por lección: porcentaje, tiempo dedicado, secciones vistas y fechas de actividad.</li>
              <li>Puntos de experiencia (XP), rachas de días seguidos, habilidades e insignias obtenidas.</li>
            </ul>

            <h3 className={h3}>e) Asistente Ix&#39;im (chat)</h3>
            <ul className={ul}>
              <li>Si usa el chat, los mensajes que escribe se envían al servicio que genera las respuestas, junto con un identificador de conversación aleatorio guardado en su navegador.</li>
              <li>El chat no envía su nombre, su correo ni los datos de su cuenta. Le pedimos <strong>no escribir datos personales</strong> en el chat.</li>
            </ul>

            <h3 className={h3}>f) Datos de navegación</h3>
            <ul className={ul}>
              <li>Si usted acepta las cookies de análisis, mediante <strong>Google Analytics</strong> se recopilan datos de uso del sitio: páginas visitadas, tiempo en el sitio, país o región aproximada, tipo de dispositivo y navegador.</li>
              <li>Los proveedores de alojamiento procesan datos técnicos como la dirección IP para entregar el sitio y protegerlo contra abusos.</li>
            </ul>

            <p className={`${p} mt-3`}>
              <strong>No pedimos</strong> fecha de nacimiento, número de DPI, teléfono, dirección, datos de pago ni otros datos sensibles. El sitio no realiza cobros.
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Para qué usamos los datos</h2>
            <ul className={ul}>
              <li>Crear y mantener su cuenta, y permitirle iniciar sesión de forma segura.</li>
              <li>Guardar su avance, rachas, puntos e insignias para que pueda continuar donde se quedó.</li>
              <li>Mostrar su nombre en su panel y en las insignias que usted genere.</li>
              <li>Responder sus preguntas a través del asistente Ix&#39;im.</li>
              <li>Entender cómo se usa el sitio (de forma agregada) para mejorar las lecciones.</li>
              <li>Mantener el sitio funcionando y prevenir abusos o accesos no autorizados.</li>
              <li>Responder los correos que usted nos envíe.</li>
            </ul>
            <p className={`${p} mt-3`}>
              <strong>No vendemos, alquilamos ni cedemos sus datos</strong>, y no los usamos para publicidad. Actualmente el sitio no envía correos de promoción ni boletines.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Su consentimiento</h2>
            <p className={p}>
              Al crear una cuenta, usted acepta que sus datos se traten como se describe en esta política, porque son necesarios para darle el servicio.
              Google Analytics solo se activa si usted lo acepta en el aviso de cookies; si lo rechaza, no se carga y no pierde ninguna función del sitio.
              Puede retirar su consentimiento en cualquier momento solicitando la eliminación de su cuenta.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Con quién se comparten</h2>
            <p className={`${p} mb-3`}>
              Para que el sitio funcione usamos proveedores técnicos que procesan datos por nuestra cuenta. Solo reciben lo necesario para prestar su servicio:
            </p>
            <ul className={ul}>
              <li><strong>Cloudflare</strong>: alojamiento y entrega del sitio.</li>
              <li><strong>Neon</strong>: base de datos donde se guardan las cuentas y el avance.</li>
              <li><strong>Google</strong>: inicio de sesión con Google (solo si usted lo elige) y Google Analytics.</li>
              <li><strong>Servicio del asistente Ix&#39;im</strong>: recibe los mensajes que usted escribe en el chat para generar respuestas automáticas.</li>
            </ul>
            <p className={`${p} mt-3`}>
              Fuera de estos casos, solo compartiríamos datos si una autoridad competente de Guatemala lo requiere conforme a la ley.
            </p>
            <p className={`${p} mt-3`}>
              Estos proveedores pueden tener servidores fuera de Guatemala, por ejemplo en Estados Unidos, por lo que sus datos pueden almacenarse o procesarse en otros países.
              Cada proveedor aplica sus propias políticas de privacidad y seguridad.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Cookies y almacenamiento en su navegador</h2>
            <p className={p}>
              Usamos una cookie de sesión para mantenerlo con la sesión iniciada, cookies de Google Analytics para medir el uso del sitio (solo si usted las acepta) y el almacenamiento local del navegador
              para recordar preferencias (por ejemplo, si ya respondió el aviso de cookies). El detalle está en la{' '}
              <Link href="/cookies" className={a}>Política de Cookies</Link>.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Cuánto tiempo guardamos los datos</h2>
            <ul className={ul}>
              <li><strong>Cuenta y avance:</strong> mientras su cuenta exista. Al eliminarla, se borran también su avance, rutas, puntos, rachas e insignias.</li>
              <li><strong>Sesiones:</strong> caducan solas después de unos días sin uso, o cuando usted cierra sesión.</li>
              <li><strong>Google Analytics:</strong> según el plazo de retención configurado en Google Analytics; estos datos no se vinculan con su cuenta.</li>
              <li><strong>Correos que nos envíe:</strong> el tiempo necesario para atender su solicitud.</li>
            </ul>
            <p className={`${p} mt-3`}>
              Las copias de seguridad que mantiene el proveedor de base de datos pueden conservar datos borrados por un tiempo limitado, hasta que se reemplazan automáticamente.
            </p>
          </section>

          <section>
            <h2 className={h2}>8. Sus derechos: acceso, corrección y eliminación</h2>
            <p className={`${p} mb-3`}>Sin importar el país desde donde nos visite, usted puede pedirnos:</p>
            <ul className={ul}>
              <li><strong>Acceso:</strong> saber qué datos suyos tenemos y recibir una copia.</li>
              <li><strong>Corrección:</strong> corregir su nombre, correo u otro dato inexacto.</li>
              <li><strong>Eliminación:</strong> borrar su cuenta y todos los datos asociados.</li>
              <li><strong>Retiro del consentimiento:</strong> dejar de usar el servicio y que se eliminen sus datos.</li>
            </ul>
            <p className={`${p} mt-3`}>
              Para cualquiera de estas solicitudes, escriba a{' '}
              <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>{' '}
              desde el mismo correo con el que creó su cuenta (así podemos confirmar que la cuenta es suya). Respondemos en un plazo máximo de 30 días.
              Para eliminar los datos de Google Analytics de su navegador, puede borrar las cookies del sitio.
            </p>
            <p className={`${p} mt-3`}>
              Guatemala no cuenta actualmente con una ley general de protección de datos personales. Aplicamos estos derechos como buena práctica y en atención a las garantías de la
              Constitución Política de la República de Guatemala.
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Seguridad</h2>
            <p className={p}>
              Tomamos medidas razonables para proteger sus datos: el sitio funciona solo con conexión cifrada (HTTPS), las contraseñas se guardan cifradas,
              el acceso a la base de datos está restringido y cada usuario solo puede ver su propio avance.
              Aun así, ningún sistema en internet es completamente seguro, por lo que no podemos garantizar una seguridad absoluta.
              Le recomendamos usar una contraseña que no use en otros sitios. Si detectamos un incidente que afecte sus datos, se lo informaremos por correo.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Menores de edad</h2>
            <p className={p}>
              Astro Maya es un sitio educativo apto para todo público. Las lecciones públicas se pueden usar sin cuenta.
              Si usted es menor de edad, debe contar con el permiso de su padre, madre o tutor para crear una cuenta.
              No pedimos la edad al registrarse; si un padre, madre o tutor cree que un menor creó una cuenta sin permiso, puede escribirnos y la eliminaremos.
            </p>
          </section>

          <section>
            <h2 className={h2}>11. Enlaces a otros sitios</h2>
            <p className={p}>
              El sitio incluye enlaces a sitios de terceros, algunos de ellos enlaces de afiliado (por ejemplo, Higgsfield). Si usted los visita, aplican las políticas de privacidad de esos sitios, no esta.
            </p>
          </section>

          <section>
            <h2 className={h2}>12. Cambios a esta política</h2>
            <p className={p}>
              Podemos actualizar esta política cuando cambie el funcionamiento del sitio. Los cambios se publicarán en esta página con una nueva fecha de «última actualización».
              Si el cambio es importante, lo avisaremos en el sitio o por correo a las personas con cuenta.
            </p>
          </section>

          <section>
            <h2 className={h2}>13. Contacto</h2>
            <p className={p}>
              Iran Lewis Ortiz — Astro Maya (NeuralCodeLab), Guatemala.<br />
              Correo:{' '}
              <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>
            </p>
            <p className={`${p} mt-2`}>
              Ver también: <Link href="/terminos" className={a}>Términos de Uso</Link> · <Link href="/cookies" className={a}>Política de Cookies</Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
