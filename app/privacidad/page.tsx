import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Astro Maya. Cómo recopilamos, usamos y protegemos tus datos personales.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://astromaya.neuralcodelab.com/privacidad" },
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      <Header />
      <section className="bg-[#1b3a6b] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-2">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Política de Privacidad</h1>
          <p className="text-white/60 mt-2 text-sm">Última actualización: marzo 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#dde3f0] p-8 md:p-12 space-y-8 text-[#1a2035]">

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">1. Responsable del tratamiento</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              <strong>Astro Maya</strong> es una plataforma educativa operada de forma independiente con sede en Guatemala.
              Para cualquier consulta sobre el tratamiento de sus datos, puede contactarnos en:{' '}
              <a href="mailto:devlewiso@gmail.com" className="text-[#1b3a6b] underline">devlewiso@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">2. Datos que recopilamos</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mb-3">
              Astro Maya <strong>no requiere registro</strong> ni recopila datos personales identificables directamente.
              Los únicos datos que se recopilan de forma automática son:
            </p>
            <ul className="list-disc list-inside text-sm text-[#6b7a9e] space-y-1.5">
              <li>Datos de navegación anónimos a través de <strong>Google Analytics</strong> (páginas visitadas, tiempo en el sitio, país de origen, tipo de dispositivo).</li>
              <li>Dirección IP anonimizada.</li>
              <li>Cookies técnicas necesarias para el funcionamiento del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">3. Finalidad del tratamiento</h2>
            <ul className="list-disc list-inside text-sm text-[#6b7a9e] space-y-1.5">
              <li>Analizar el uso de la plataforma para mejorar el contenido educativo.</li>
              <li>Medir el alcance geográfico (departamentos de Guatemala y países internacionales).</li>
              <li>Garantizar el correcto funcionamiento técnico del sitio.</li>
            </ul>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mt-3">
              <strong>No utilizamos sus datos para publicidad ni los vendemos a terceros.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">4. Base legal</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              El tratamiento se basa en su <strong>consentimiento</strong> (Art. 6.1.a del RGPD / GDPR) otorgado al aceptar el uso de cookies, y en el interés legítimo de mejorar el servicio educativo gratuito que ofrecemos.
              En cumplimiento con la legislación de Guatemala, incluyendo la <em>Ley de Acceso a la Información Pública</em> (Decreto 57-2008).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">5. Transferencias internacionales</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Google Analytics transfiere datos a servidores de Google LLC ubicados en Estados Unidos, bajo las garantías del <em>Data Privacy Framework</em> UE-EE.UU. No realizamos otras transferencias internacionales de datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">6. Sus derechos (GDPR)</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mb-3">Si se encuentra en la Unión Europea o en cualquier jurisdicción con leyes de privacidad aplicables, tiene derecho a:</p>
            <ul className="list-disc list-inside text-sm text-[#6b7a9e] space-y-1.5">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento basado en interés legítimo.</li>
              <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin efecto retroactivo.</li>
            </ul>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mt-3">
              Para ejercer estos derechos, contáctenos en <a href="mailto:devlewiso@gmail.com" className="text-[#1b3a6b] underline">devlewiso@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">7. Conservación de datos</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Los datos analíticos se conservan durante un máximo de <strong>14 meses</strong> en Google Analytics, conforme a nuestra configuración. No conservamos datos personales en nuestros propios servidores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">8. Cambios en esta política</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Nos reservamos el derecho de actualizar esta política. Los cambios serán publicados en esta página con la fecha de última actualización. Le recomendamos revisarla periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">9. Contacto</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Para cualquier consulta sobre privacidad:{' '}
              <a href="mailto:devlewiso@gmail.com" className="text-[#1b3a6b] underline">devlewiso@gmail.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
