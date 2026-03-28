import Header from '../components/Header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      <Header />
      <section className="bg-[#1b3a6b] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-2">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Términos de Uso</h1>
          <p className="text-white/60 mt-2 text-sm">Última actualización: marzo 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#dde3f0] p-8 md:p-12 space-y-8 text-[#1a2035]">

          <div className="p-4 bg-[#c8a217]/10 border border-[#c8a217]/30 rounded-lg">
            <p className="text-sm text-[#1a2035] font-medium">
              Astro Maya es una plataforma educativa gratuita. <strong>No se realizan cobros ni transacciones económicas</strong> a través de este sitio. El acceso a todos los contenidos disponibles actualmente es completamente gratuito.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">1. Aceptación de los términos</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Al acceder y utilizar Astro Maya, usted acepta estos Términos de Uso. Si no está de acuerdo, le solicitamos que no utilice el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">2. Descripción del servicio</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mb-3">
              Astro Maya ofrece lecciones educativas introductorias de los cinco idiomas mayas más hablados de Guatemala: K&#39;iche&#39;, Q&#39;eqchi&#39;, Kaqchikel, Mam y Tz&#39;utujil.
            </p>
            <ul className="list-disc list-inside text-sm text-[#6b7a9e] space-y-1.5">
              <li>El servicio es completamente <strong>gratuito</strong> en su estado actual.</li>
              <li>No se requiere registro ni cuenta de usuario.</li>
              <li>No se procesan pagos ni datos financieros.</li>
              <li>Los planes institucionales o enterprise mostrados son informativos sobre la <strong>visión futura</strong> del proyecto, no representan servicios activos ni generan obligación de pago.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">3. Propiedad intelectual</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              El contenido educativo, diseño, textos, imágenes y código fuente de Astro Maya son propiedad de sus creadores. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa. El vocabulario y frases en idiomas mayas son patrimonio cultural de las comunidades indígenas de Guatemala y se usan con fines educativos y de preservación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">4. Uso aceptable</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mb-3">El usuario se compromete a:</p>
            <ul className="list-disc list-inside text-sm text-[#6b7a9e] space-y-1.5">
              <li>Utilizar el sitio exclusivamente con fines educativos y personales.</li>
              <li>No intentar vulnerar la seguridad o el funcionamiento del sitio.</li>
              <li>No usar el contenido para fines comerciales sin autorización.</li>
              <li>Respetar la naturaleza cultural y comunitaria del contenido en idiomas mayas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">5. Exención de responsabilidad</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Astro Maya se proporciona &quot;tal como está&quot;, sin garantías de disponibilidad ininterrumpida. Aunque nos esforzamos por la precisión del contenido lingüístico y cultural, no somos responsables de errores u omisiones. El sitio puede ser actualizado o modificado en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">6. Legislación aplicable</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Estos términos se rigen por la legislación vigente de la República de Guatemala. Para usuarios de la Unión Europea, también aplican los derechos reconocidos por el RGPD. Cualquier disputa se someterá a los tribunales competentes de Guatemala.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">7. Modificaciones</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en esta página. El uso continuado del sitio tras los cambios implica su aceptación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">8. Contacto</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Para consultas sobre estos términos:{' '}
              <a href="mailto:devlewiso@gmail.com" className="text-[#1b3a6b] underline">devlewiso@gmail.com</a>
            </p>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mt-2">
              Ver también: <Link href="/privacidad" className="text-[#1b3a6b] underline">Política de Privacidad</Link> · <Link href="/cookies" className="text-[#1b3a6b] underline">Política de Cookies</Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
