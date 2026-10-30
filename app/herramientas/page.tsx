import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Herramientas para Creadores — Higgsfield IA',
  description:
    'Higgsfield es la herramienta de IA que recomendamos para crear videos e imágenes sobre las lenguas y la cultura maya de Guatemala. Prueba el programa de referidos.',
  alternates: { canonical: 'https://astromaya.neuralcodelab.com/herramientas' },
  openGraph: {
    title: 'Herramientas para Creadores — Higgsfield IA',
    description:
      'La herramienta de IA que recomendamos para crear contenido audiovisual sobre las lenguas mayas de Guatemala.',
    url: 'https://astromaya.neuralcodelab.com/herramientas',
    type: 'website',
  },
};

const REFERRAL_URL = 'https://higgsfield.ai?fpr=iran-692b24';

const tiers = [
  { name: 'Bronce', threshold: 'Punto de partida', reward: '10%', current: true },
  { name: 'Plata', threshold: 'Ingresos de referidos $2,500+', reward: '12%', current: false },
  { name: 'Oro', threshold: 'Ingresos de referidos $5,000+', reward: '15%', current: false },
  { name: 'Platino', threshold: 'Ingresos de referidos $25,000+', reward: '20%', current: false },
  { name: 'Diamante', threshold: 'Ingresos de referidos $100,000+', reward: '25%', current: false },
];

const uses = [
  {
    title: 'Videos didácticos',
    description: 'Genera clips cortos para ilustrar vocabulario, frases y contexto cultural de cada idioma maya.',
  },
  {
    title: 'Ilustraciones culturales',
    description: 'Crea imágenes que acompañen las lecciones de K’iche’, Q’eqchi’, Kaqchikel, Mam y Tz’utujil.',
  },
  {
    title: 'Material para redes',
    description: 'Produce piezas visuales para difundir la preservación de las lenguas mayas en redes sociales.',
  },
];

export default function HerramientasPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#0e5c4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#d9a62b]/20 border border-[#d9a62b]/40 rounded text-[#e6b647] text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d9a62b] flex-shrink-0"></span>
            Herramienta recomendada
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Crea contenido sobre las lenguas mayas con <span className="text-[#e6b647]">Higgsfield</span>
          </h1>
          <p className="text-base md:text-lg text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
            Usamos Higgsfield para generar videos, imágenes y audio con inteligencia artificial. Es la
            herramienta que recomendamos a docentes y creadores que producen material educativo sobre
            la cultura maya de Guatemala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="px-8 py-3.5 bg-[#d9a62b] text-[#101418] font-bold rounded hover:bg-[#e6b647] transition-colors text-sm"
            >
              Probar Higgsfield gratis
            </a>
            <a
              href="#programa"
              className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded border border-white/30 hover:bg-white/20 transition-colors text-sm"
            >
              Ver programa de referidos
            </a>
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#8a6410] font-semibold text-xs uppercase tracking-widest mb-2">Cómo lo usamos</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e5c4a]">Para qué sirve en Astro Maya</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uses.map((use, i) => (
              <div key={i} className="bg-[#f6f5f1] rounded-xl border border-[#e4e2da] p-8">
                <div className="w-8 h-0.5 bg-[#d9a62b] mb-5"></div>
                <h3 className="font-bold text-[#14181f] mb-3 text-base">{use.title}</h3>
                <p className="text-sm text-[#5e6673] leading-relaxed">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral program */}
      <section id="programa" className="py-16 md:py-20 bg-[#f6f5f1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#8a6410] font-semibold text-xs uppercase tracking-widest mb-2">Programa de referidos</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e5c4a] mb-4">Gana con cada referido</h2>
            <p className="text-[#5e6673] max-w-2xl mx-auto text-sm leading-relaxed">
              El porcentaje de recompensa depende de los ingresos totales que generen tus referidos.
              Comparte tu enlace y sube de nivel.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#e4e2da] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0e5c4a] text-white text-left">
                  <th className="px-5 py-3 font-semibold">Nivel</th>
                  <th className="px-5 py-3 font-semibold">Requisito</th>
                  <th className="px-5 py-3 font-semibold text-right">Recompensa</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier) => (
                  <tr key={tier.name} className="border-t border-[#e4e2da]">
                    <td className="px-5 py-4 font-semibold text-[#14181f]">
                      {tier.name}
                      {tier.current && (
                        <span className="ml-2 inline-block px-2 py-0.5 bg-[#d9a62b]/15 text-[#8a6f0f] text-[10px] font-bold uppercase tracking-wide rounded">
                          Estás aquí
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-[#5e6673]">{tier.threshold}</td>
                    <td className="px-5 py-4 text-right font-bold text-[#0e5c4a]">{tier.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 bg-white rounded-xl border border-[#e4e2da] p-6 md:p-8">
            <h3 className="font-bold text-[#14181f] text-base mb-2">Tu enlace de referido</h3>
            <p className="text-sm text-[#5e6673] mb-4 leading-relaxed">
              Comparte este enlace. Quien se registre con él quedará vinculado a tu cuenta de afiliado.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <code className="flex-1 px-4 py-3 bg-[#f6f5f1] border border-[#e4e2da] rounded text-xs text-[#0e5c4a] break-all">
                {REFERRAL_URL}
              </code>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="px-6 py-3 bg-[#d9a62b] text-[#101418] font-bold rounded hover:bg-[#e6b647] transition-colors text-sm text-center whitespace-nowrap"
              >
                Abrir enlace
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#5e6673]">
              ¿Eres un creador consolidado y quieres recompensas más altas?{' '}
              <a
                href="mailto:affiliate@higgsfield.ai"
                className="text-[#0e5c4a] font-semibold underline hover:text-[#8a6410] transition-colors"
              >
                affiliate@higgsfield.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Disclosure + CTA */}
      <section className="py-16 md:py-20 bg-[#0e5c4a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Empieza a crear hoy</h2>
          <p className="text-white/65 mb-8 text-base leading-relaxed max-w-xl mx-auto">
            Prueba Higgsfield con nuestro enlace y apoya el desarrollo de Astro Maya sin costo adicional para ti.
          </p>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#d9a62b] text-[#101418] font-bold rounded hover:bg-[#e6b647] transition-colors"
          >
            Ir a Higgsfield
          </a>
          <p className="text-white/40 text-xs mt-8 max-w-lg mx-auto leading-relaxed">
            Divulgación: los enlaces a Higgsfield de esta página son enlaces de afiliado. Si te registras
            a través de ellos, Astro Maya puede recibir una comisión. Esto no cambia el precio que pagas.
          </p>
          <Link href="/" className="inline-block mt-6 text-white/50 text-sm underline hover:text-white transition-colors">
            Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
