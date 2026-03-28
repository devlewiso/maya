import Header from '../components/Header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      <Header />
      <section className="bg-[#1b3a6b] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-2">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Política de Cookies</h1>
          <p className="text-white/60 mt-2 text-sm">Última actualización: marzo 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#dde3f0] p-8 md:p-12 space-y-8 text-[#1a2035]">

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">¿Qué son las cookies?</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo para recordar preferencias, analizar el uso del sitio y mejorar la experiencia del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">Cookies que utilizamos</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f7fc]">
                    <th className="text-left p-3 border border-[#dde3f0] text-[#1b3a6b] font-semibold">Cookie</th>
                    <th className="text-left p-3 border border-[#dde3f0] text-[#1b3a6b] font-semibold">Proveedor</th>
                    <th className="text-left p-3 border border-[#dde3f0] text-[#1b3a6b] font-semibold">Finalidad</th>
                    <th className="text-left p-3 border border-[#dde3f0] text-[#1b3a6b] font-semibold">Duración</th>
                    <th className="text-left p-3 border border-[#dde3f0] text-[#1b3a6b] font-semibold">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e] font-mono text-xs">_ga</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">Google Analytics</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">Distinguir usuarios únicos</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">2 años</td>
                    <td className="p-3 border border-[#dde3f0]"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Analítica</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e] font-mono text-xs">_ga_*</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">Google Analytics</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">Mantener estado de sesión</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">2 años</td>
                    <td className="p-3 border border-[#dde3f0]"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Analítica</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e] font-mono text-xs">astromaya_cookies</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">Astro Maya</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">Guardar preferencia de consentimiento</td>
                    <td className="p-3 border border-[#dde3f0] text-[#6b7a9e]">1 año</td>
                    <td className="p-3 border border-[#dde3f0]"><span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">Necesaria</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">Cookies necesarias vs. analíticas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800 text-sm mb-2">Necesarias</h3>
                <p className="text-xs text-green-700 leading-relaxed">
                  Imprescindibles para el funcionamiento del sitio. No requieren consentimiento previo. Solo guardamos su preferencia de cookies.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 text-sm mb-2">Analíticas</h3>
                <p className="text-xs text-blue-700 leading-relaxed">
                  Google Analytics nos ayuda a entender cómo se usa la plataforma. <strong>Requieren su consentimiento</strong> y puede rechazarlas sin perder funcionalidad.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">Cómo gestionar las cookies</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed mb-3">
              Puede retirar su consentimiento o gestionar las cookies de las siguientes formas:
            </p>
            <ul className="list-disc list-inside text-sm text-[#6b7a9e] space-y-2">
              <li>Usando el <strong>banner de cookies</strong> que aparece al ingresar al sitio por primera vez.</li>
              <li>Configurando su <strong>navegador</strong> para bloquear o eliminar cookies (consulte la ayuda de su navegador).</li>
              <li>Instalando el <strong>complemento de inhabilitación de Google Analytics</strong>: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#1b3a6b] underline">tools.google.com/dlpage/gaoptout</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">Base legal (GDPR)</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              De acuerdo al <strong>Reglamento General de Protección de Datos (RGPD/GDPR)</strong>, las cookies analíticas requieren consentimiento previo explícito (Art. 6.1.a). Puede otorgarlo o retirarlo en cualquier momento sin consecuencias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1b3a6b] mb-3">Más información</h2>
            <p className="text-sm text-[#6b7a9e] leading-relaxed">
              Consulte nuestra{' '}
              <Link href="/privacidad" className="text-[#1b3a6b] underline">Política de Privacidad</Link>{' '}
              para más detalles sobre el tratamiento de datos. Contacto:{' '}
              <a href="mailto:devlewiso@gmail.com" className="text-[#1b3a6b] underline">devlewiso@gmail.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
