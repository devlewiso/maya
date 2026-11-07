import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Términos y condiciones de uso de la plataforma Astro Maya.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://astromaya.neuralcodelab.com/terminos" },
};

const p = "text-sm text-[#5e6673] leading-relaxed";
const ul = "list-disc list-inside text-sm text-[#5e6673] space-y-1.5";
const h2 = "text-xl font-bold text-[#0e5c4a] mb-3";
const a = "text-[#0e5c4a] underline";

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[#f6f5f1]">
      <Header />
      <section className="bg-[#0e5c4a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#8a6410] font-semibold text-xs uppercase tracking-widest mb-2">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Términos de Uso</h1>
          <p className="text-white/60 mt-2 text-sm">Última actualización: 6 de noviembre de 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#e4e2da] p-8 md:p-12 space-y-8 text-[#14181f]">

          <div className="p-4 bg-[#d9a62b]/10 border border-[#d9a62b]/30 rounded-lg">
            <p className="text-sm text-[#14181f] font-medium">
              Astro Maya es una plataforma educativa gratuita. <strong>No se realizan cobros ni transacciones económicas</strong> a través de este sitio. El acceso a todos los contenidos disponibles actualmente es completamente gratuito.
            </p>
          </div>

          <section>
            <h2 className={h2}>1. Quién ofrece el servicio</h2>
            <p className={p}>
              Astro Maya es un proyecto educativo independiente de NeuralCodeLab, creado y administrado por una persona individual, <strong>Iran Lewis Ortiz</strong>, desde Guatemala.
              No es una institución, empresa, universidad ni entidad oficial, y no cuenta con oficinas ni sedes físicas. El contacto es únicamente por correo:{' '}
              <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Aceptación de los términos</h2>
            <p className={p}>
              Al acceder y utilizar Astro Maya, o al crear una cuenta, usted acepta estos Términos de Uso y la{' '}
              <Link href="/privacidad" className={a}>Política de Privacidad</Link>. Si no está de acuerdo, le solicitamos que no utilice el sitio.
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Descripción del servicio</h2>
            <p className={`${p} mb-3`}>
              Astro Maya ofrece lecciones educativas introductorias de los cinco idiomas mayas más hablados de Guatemala: K&#39;iche&#39;, Q&#39;eqchi&#39;, Kaqchikel, Mam y Tz&#39;utujil.
            </p>
            <ul className={ul}>
              <li>El servicio es completamente <strong>gratuito</strong> en su estado actual y no se procesan pagos ni datos financieros.</li>
              <li>Las lecciones públicas se pueden usar sin cuenta.</li>
              <li>Con una cuenta gratuita puede crear rutas de aprendizaje y guardar su avance, rachas, puntos e insignias.</li>
              <li>El asistente Ix&#39;im es un chat de respuestas automáticas para apoyar el aprendizaje.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>4. Su cuenta</h2>
            <ul className={ul}>
              <li>Puede registrarse con correo y contraseña o con su cuenta de Google.</li>
              <li>Usted es responsable de dar datos verdaderos y de mantener su contraseña en secreto. Avísenos si cree que alguien más usó su cuenta.</li>
              <li>Si es menor de edad, necesita el permiso de su padre, madre o tutor para crear una cuenta.</li>
              <li>Puede pedir la eliminación de su cuenta en cualquier momento escribiendo a{' '}
                <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>.</li>
              <li>Podemos suspender o eliminar cuentas que se usen para dañar el sitio, a otras personas o que incumplan estos términos.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>5. Naturaleza del contenido</h2>
            <p className={p}>
              El contenido de Astro Maya tiene fines <strong>educativos y culturales</strong>. Es una introducción a los idiomas mayas y no sustituye la enseñanza de hablantes nativos,
              de docentes certificados ni de instituciones especializadas. No debe usarse como traducción oficial ni para trámites legales, médicos u otros asuntos donde se necesite un intérprete o traductor profesional.
            </p>
            <p className={`${p} mt-3`}>
              Las insignias que se generan en la plataforma son un reconocimiento de avance personal; <strong>no son certificados ni títulos</strong> y no tienen validez académica oficial.
            </p>
            <p className={`${p} mt-3`}>
              Las respuestas del asistente Ix&#39;im se generan de forma automática y pueden contener errores. Verifique la información importante con fuentes confiables o con hablantes de cada idioma.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Propiedad intelectual</h2>
            <p className={p}>
              El diseño, los textos, las imágenes y el código fuente de Astro Maya pertenecen a su creador, salvo que se indique otra cosa. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa.
              El vocabulario y las frases en idiomas mayas son patrimonio cultural de los pueblos mayas de Guatemala y se usan con fines educativos y de preservación.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Uso aceptable</h2>
            <p className={`${p} mb-3`}>El usuario se compromete a:</p>
            <ul className={ul}>
              <li>Utilizar el sitio con fines educativos y personales.</li>
              <li>No intentar vulnerar la seguridad o el funcionamiento del sitio, ni acceder a cuentas ajenas.</li>
              <li>No usar el chat para enviar contenido ofensivo, ilegal o datos personales de otras personas.</li>
              <li>No usar el contenido con fines comerciales sin autorización.</li>
              <li>Respetar la naturaleza cultural y comunitaria del contenido en idiomas mayas.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>8. Enlaces a terceros</h2>
            <p className={p}>
              El sitio puede incluir enlaces a otros sitios, algunos de ellos enlaces de afiliado (por ejemplo, Higgsfield), por los que el creador puede recibir una comisión sin costo adicional para usted.
              No somos responsables del contenido ni de las prácticas de esos sitios.
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Exención de responsabilidad</h2>
            <p className={p}>
              Astro Maya se proporciona &quot;tal como está&quot;, sin garantías de disponibilidad ininterrumpida. Aunque nos esforzamos por la precisión del contenido lingüístico y cultural, no somos responsables de errores u omisiones,
              ni de decisiones que se tomen con base en el contenido o en las respuestas del asistente. El sitio, sus funciones y estos términos pueden cambiar o suspenderse en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Legislación aplicable</h2>
            <p className={p}>
              Estos términos se rigen por las leyes de la República de Guatemala. Cualquier controversia se someterá a los tribunales competentes de Guatemala, sin perjuicio de los derechos que la ley de su país de residencia le reconozca como usuario.
            </p>
          </section>

          <section>
            <h2 className={h2}>11. Modificaciones</h2>
            <p className={p}>
              Podemos modificar estos términos cuando cambie el funcionamiento del sitio. Los cambios se publicarán en esta página con una nueva fecha de «última actualización». El uso continuado del sitio tras los cambios implica su aceptación.
            </p>
          </section>

          <section>
            <h2 className={h2}>12. Contacto</h2>
            <p className={p}>
              Para consultas sobre estos términos:{' '}
              <a href="mailto:devlewiso@gmail.com" className={a}>devlewiso@gmail.com</a>
            </p>
            <p className={`${p} mt-2`}>
              Ver también: <Link href="/privacidad" className={a}>Política de Privacidad</Link> · <Link href="/cookies" className={a}>Política de Cookies</Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
