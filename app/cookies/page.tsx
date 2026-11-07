import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies en Astro Maya.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://astromaya.neuralcodelab.com/cookies" },
};

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#f6f5f1]">
      <Header />
      <section className="bg-[#0e5c4a] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#8a6410] font-semibold text-xs uppercase tracking-widest mb-2">Legal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Política de Cookies</h1>
          <p className="text-white/60 mt-2 text-sm">Última actualización: 6 de noviembre de 2026</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-[#e4e2da] p-8 md:p-12 space-y-8 text-[#14181f]">

          <section>
            <h2 className="text-xl font-bold text-[#0e5c4a] mb-3">¿Qué son las cookies?</h2>
            <p className="text-sm text-[#5e6673] leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web guardan en su dispositivo para mantener la sesión iniciada, recordar preferencias o medir el uso del sitio. Astro Maya también usa el almacenamiento local del navegador (localStorage), que funciona de forma parecida pero no se envía al servidor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0e5c4a] mb-3">Cookies que utilizamos</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f6f5f1]">
                    <th className="text-left p-3 border border-[#e4e2da] text-[#0e5c4a] font-semibold">Cookie</th>
                    <th className="text-left p-3 border border-[#e4e2da] text-[#0e5c4a] font-semibold">Proveedor</th>
                    <th className="text-left p-3 border border-[#e4e2da] text-[#0e5c4a] font-semibold">Finalidad</th>
                    <th className="text-left p-3 border border-[#e4e2da] text-[#0e5c4a] font-semibold">Duración</th>
                    <th className="text-left p-3 border border-[#e4e2da] text-[#0e5c4a] font-semibold">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">_ga</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Google Analytics</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Distinguir usuarios únicos</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">2 años</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Analítica</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">_ga_*</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Google Analytics</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Mantener estado de sesión</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">2 años</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Analítica</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">better-auth.session_token<br />(con prefijo __Secure- en HTTPS)</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Astro Maya</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Mantener su sesión iniciada (solo si tiene cuenta)</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Unos días; se borra al cerrar sesión</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">Necesaria</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">Cookies temporales de inicio de sesión</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Astro Maya</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Proteger el inicio de sesión con Google mientras se completa</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Minutos</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">Necesaria</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">astromaya_cookies</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Astro Maya (localStorage)</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Recordar si aceptó o rechazó las cookies de análisis</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Hasta que borre los datos del navegador</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">Necesaria</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">astromaya_chat_session</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Astro Maya (localStorage)</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Identificador aleatorio de la conversación con el asistente Ix&#39;im</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Hasta que borre los datos del navegador</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs">Preferencia</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">astro-maya-onboarding-completed</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Astro Maya (localStorage)</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Recordar que ya vio la guía de bienvenida</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Hasta que borre los datos del navegador</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs">Preferencia</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673] font-mono text-xs">astromaya_referral_banner</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Astro Maya (localStorage)</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Recordar que cerró el anuncio superior</td>
                    <td className="p-3 border border-[#e4e2da] text-[#5e6673]">Hasta que borre los datos del navegador</td>
                    <td className="p-3 border border-[#e4e2da]"><span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded text-xs">Preferencia</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0e5c4a] mb-3">Cookies necesarias vs. analíticas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800 text-sm mb-2">Necesarias</h3>
                <p className="text-xs text-green-700 leading-relaxed">
                  Imprescindibles para que el sitio funcione: mantener su sesión iniciada y recordar su respuesta al aviso de cookies. No se usan para publicidad ni para seguirle en otros sitios.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 text-sm mb-2">Analíticas</h3>
                <p className="text-xs text-blue-700 leading-relaxed">
                  Google Analytics nos ayuda a entender cómo se usa la plataforma. Puede rechazarlas en el aviso de cookies <strong>sin perder ninguna función</strong> del sitio.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0e5c4a] mb-3">Cómo gestionar las cookies</h2>
            <p className="text-sm text-[#5e6673] leading-relaxed mb-3">
              Puede retirar su consentimiento o gestionar las cookies de las siguientes formas:
            </p>
            <ul className="list-disc list-inside text-sm text-[#5e6673] space-y-2">
              <li>Usando el <strong>banner de cookies</strong> que aparece al ingresar al sitio por primera vez.</li>
              <li>Configurando su <strong>navegador</strong> para bloquear o eliminar cookies (consulte la ayuda de su navegador).</li>
              <li>Instalando el <strong>complemento de inhabilitación de Google Analytics</strong>: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#0e5c4a] underline">tools.google.com/dlpage/gaoptout</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0e5c4a] mb-3">Sobre el aviso de cookies</h2>
            <p className="text-sm text-[#5e6673] leading-relaxed">
              Google Analytics no se carga hasta que usted elige «Aceptar» en el aviso. Si elige «Rechazar», no se carga en ninguna visita y su respuesta queda guardada en su navegador.
              Para cambiar su decisión, borre los datos del sitio en su navegador y el aviso volverá a aparecer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0e5c4a] mb-3">Más información</h2>
            <p className="text-sm text-[#5e6673] leading-relaxed">
              Consulte nuestra{' '}
              <Link href="/privacidad" className="text-[#0e5c4a] underline">Política de Privacidad</Link>{' '}
              para más detalles sobre el tratamiento de datos. Contacto:{' '}
              <a href="mailto:devlewiso@gmail.com" className="text-[#0e5c4a] underline">devlewiso@gmail.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
