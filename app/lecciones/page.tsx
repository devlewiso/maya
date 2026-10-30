import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/Header";
import { LANGUAGES } from "../components/Tejido";
import { kicheLessons } from "../content/kicheLeccion";
import { qeqchiLessons } from "../content/qeqchiLeccion";
import { kaqchikelLessons } from "../content/kaqchikelLeccion";
import { mamLessons } from "../content/mamLeccion";
import { tzutujilLessons } from "../content/tzutujilLeccion";

const lessonsByLanguage: Record<string, { title: string }[]> = {
  "K'iche'": kicheLessons,
  "Q'eqchi'": qeqchiLessons,
  "Kaqchikel": kaqchikelLessons,
  "Mam": mamLessons,
  "Tz'utujil": tzutujilLessons,
};

const reasons = [
  { title: "Preservación cultural", text: "Contribuye a mantener vivos idiomas ancestrales que son parte de la identidad de Guatemala." },
  { title: "Otra forma de pensar", text: "Las lenguas mayas tienen estructuras gramaticales propias que amplían tu comprensión del lenguaje." },
  { title: "Conexión comunitaria", text: "Habla con las comunidades en su idioma y participa en intercambios culturales con respeto." },
];

export default function LeccionesPage() {
  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#14181f]">
      <Header />

      <section className="bg-white border-b border-[#e4e2da]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#5e6673] mb-4">Lecciones</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl">Explora las lenguas mayas</h1>
          <p className="text-lg leading-relaxed text-[#4a5260] max-w-2xl">
            Cinco idiomas, cada uno con su propia ventana a la cosmovisión y las tradiciones del pueblo maya. Todas las lecciones son gratuitas y no necesitas registrarte para verlas.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-5">
        {LANGUAGES.map((lang) => {
          const lessons = lessonsByLanguage[lang.name] ?? [];
          return (
            <Link
              key={lang.href}
              href={lang.href}
              className="group bg-white border border-[#e4e2da] rounded-2xl p-7 flex flex-col hover:border-[#14181f] transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-1">
                <h2 className="text-2xl font-extrabold flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ background: lang.color }} />
                  {lang.name}
                </h2>
                <span className="font-mono text-xs tracking-[0.06em] uppercase text-[#5e6673]">{lessons.length} lecciones</span>
              </div>
              <p className="text-sm text-[#5e6673] mb-5">{lang.region}</p>
              <ol className="text-[15px] text-[#3b4250] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-6">
                {lessons.map((l, i) => (
                  <li key={l.title} className="flex gap-2.5">
                    <span className="font-mono text-xs text-[#5e6673] pt-1">{String(i + 1).padStart(2, "0")}</span>
                    {l.title}
                  </li>
                ))}
              </ol>
              <span className="mt-auto text-sm font-semibold text-[#0e5c4a]">
                Empezar {lang.name} <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          );
        })}
      </section>

      <section className="bg-white border-t border-[#e4e2da] py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10 max-w-2xl">¿Por qué aprender una lengua maya?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-[#14181f] pt-6">
                <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#4a5260]">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
