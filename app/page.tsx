import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from './components/Header';
import Link from 'next/link';
import { LANGUAGES, MayaNumeral, TejidoBand } from './components/Tejido';
import { kicheLessons } from './content/kicheLeccion';
import { qeqchiLessons } from './content/qeqchiLeccion';
import { kaqchikelLessons } from './content/kaqchikelLeccion';
import { mamLessons } from './content/mamLeccion';
import { tzutujilLessons } from './content/tzutujilLeccion';

export const metadata: Metadata = {
  title: "Astro Maya — Aprende los 5 Idiomas Mayas de Guatemala Gratis",
  description: "Aprende K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil gratis. Vocabulario, frases y lecciones interactivas para preservar las lenguas mayas de Guatemala.",
  keywords: [
    "idiomas mayas guatemala gratis",
    "aprender kiche online",
    "lecciones qeqchi gratis",
    "lenguas mayas de guatemala",
    "idiomas indigenas de guatemala",
    "learn kiche free",
    "maya language lessons",
    "kaqchikel aprender",
    "mam idioma",
    "tzutujil lecciones",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com" },
  openGraph: {
    title: "Astro Maya — Aprende los 5 Idiomas Mayas de Guatemala Gratis",
    description: "Aprende K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil gratis. Vocabulario, frases y lecciones interactivas.",
    url: "https://astromaya.neuralcodelab.com",
    type: "website",
  },
};

const lessonCounts: Record<string, number> = {
  "K'iche'": kicheLessons.length,
  "Q'eqchi'": qeqchiLessons.length,
  "Kaqchikel": kaqchikelLessons.length,
  "Mam": mamLessons.length,
  "Tz'utujil": tzutujilLessons.length,
};
const totalLessons = Object.values(lessonCounts).reduce((a, b) => a + b, 0);

const steps = [
  { title: 'Elige un idioma', text: 'Empieza por el idioma de tu familia, de tu región o el que te llame.' },
  { title: 'Aprende con lecciones breves', text: 'Vocabulario, frases, gramática y una nota cultural en cada lección.' },
  { title: 'Practica', text: 'Ejercicios para afianzar cada palabra antes de pasar a la siguiente.' },
  { title: 'Obtén tu constancia', text: 'Completa una ruta y recibe una constancia de logro verificable.' },
];

const values = [
  { title: 'Respeto', text: "Como en la cultura K'iche', saludamos primero a los mayores: aprendemos de quienes guardan la lengua." },
  { title: 'Comunidad', text: 'Puentes entre hablantes de español y de idiomas mayas, aprendiendo unos de otros.' },
  { title: 'Acceso libre', text: 'Gratis para todas las personas, en Guatemala y fuera de ella.' },
  { title: 'Preservación', text: 'Cada lección ayuda a que la lengua llegue a la siguiente generación.' },
];

const eyebrow = 'font-mono text-[13px] tracking-[0.08em] uppercase text-[#5e6673]';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#14181f]">
      <Header />

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-24 md:pb-20 grid gap-14 lg:grid-cols-[1.25fr_1fr] items-center">
          <div>
            <p className={`${eyebrow} mb-5`}>Plataforma educativa · Guatemala</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Las lenguas mayas, vivas en cada palabra.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#4a5260] mb-9 max-w-xl">
              Aprende K&apos;iche&apos;, Q&apos;eqchi&apos;, Kaqchikel, Mam y Tz&apos;utujil con lecciones breves y contexto cultural. Gratis, para Guatemala y para el mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/signup" className="px-7 py-4 bg-[#0e5c4a] text-white font-bold rounded-xl hover:bg-[#0a4337] transition-colors text-center">
                Empezar gratis
              </Link>
              <Link href="#idiomas" className="px-7 py-4 bg-white text-[#14181f] font-semibold rounded-xl border border-[#cfccc2] hover:border-[#14181f] transition-colors text-center">
                Explorar los 5 idiomas
              </Link>
            </div>
          </div>

          {/* Tarjeta de palabra */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end bg-[#101418] text-white rounded-2xl overflow-hidden">
            <TejidoBand />
            <div className="p-8">
              <div className="flex justify-between items-center mb-9">
                <span className="font-mono text-xs tracking-[0.08em] uppercase text-[#b9bfc9]">K&apos;iche&apos; · Lección 1</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#b9bfc9]">
                  <span className="w-2 h-2 rounded-full bg-[#e0604f]" />Saludos
                </span>
              </div>
              <p className="text-5xl font-extrabold tracking-tight mb-1.5">Saqarik</p>
              <p className="text-lg font-semibold text-[#d9a62b] mb-8">Buenos días</p>
              <div className="p-4 bg-[#1b2129] rounded-xl">
                <p className="text-base font-semibold mb-1">Saqarik. Achike ab&apos;i&apos;?</p>
                <p className="text-sm text-[#b9bfc9]">Buenos días. ¿Cómo te llamas?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cifras reales */}
      <section aria-label="Astro Maya en cifras" className="bg-white border-y border-[#e4e2da]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div><p className="text-3xl font-extrabold">{LANGUAGES.length}</p><p className="text-sm text-[#5e6673] mt-1">idiomas mayas</p></div>
          <div><p className="text-3xl font-extrabold">{totalLessons}</p><p className="text-sm text-[#5e6673] mt-1">lecciones disponibles</p></div>
          <div><p className="text-3xl font-extrabold">Gratis</p><p className="text-sm text-[#5e6673] mt-1">para todas las personas</p></div>
        </div>
      </section>

      {/* Idiomas */}
      <section id="idiomas" className="py-20 md:py-24 px-4 sm:px-6 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
            <div className="max-w-2xl">
              <p className={`${eyebrow} mb-3`}>Idiomas</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Cinco idiomas, cinco pueblos</h2>
              <p className="text-[17px] leading-relaxed text-[#4a5260]">Cada idioma es una comunidad con su propia historia y cosmovisión. Elige por dónde empezar.</p>
            </div>
            <Link href="/lecciones" className="font-semibold text-[#0e5c4a] hover:text-[#0a4337] py-2">Ver todas las lecciones →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang.href}
                href={lang.href}
                className="group bg-white border border-[#e4e2da] rounded-2xl p-6 flex flex-col gap-1.5 hover:border-[#14181f] transition-colors"
              >
                <span className="w-9 h-1 rounded-sm mb-4" style={{ background: lang.color }} />
                <span className="text-xl font-extrabold">{lang.name}</span>
                <span className="text-sm text-[#5e6673]">{lang.region}</span>
                <span className="mt-5 text-sm font-semibold text-[#0e5c4a]">
                  {lessonCounts[lang.name]} lecciones <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-white border-y border-[#e4e2da] py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className={`${eyebrow} mb-3`}>Cómo funciona</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 max-w-2xl">Una ruta clara, de la primera palabra a tu constancia</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[#14181f] pt-6">
                <div className="h-7 flex items-center mb-5"><MayaNumeral value={i + 1} /></div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#4a5260]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className={`${eyebrow} mb-3`}>Nuestros valores</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5">Enseñar una lengua es cuidar a su gente</h2>
            <p className="text-[17px] leading-relaxed text-[#4a5260]">Astro Maya nace en Guatemala para que las lenguas mayas se hablen, se escriban y se hereden.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-[#e4e2da] rounded-2xl p-7">
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#4a5260]">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#101418] text-white">
        <TejidoBand />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-[#d9a62b] mb-3">Matyox — gracias</p>
            <h2 className="text-3xl md:text-[44px] font-extrabold leading-tight tracking-tight">Tu primera palabra en idioma maya está a un clic.</h2>
          </div>
          <Link href="/signup" className="shrink-0 px-7 py-4 bg-[#d9a62b] text-[#101418] font-bold rounded-xl hover:bg-[#e6b647] transition-colors text-center">
            Crear cuenta gratis
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
