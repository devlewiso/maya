import Image from "next/image";
import Footer from "./components/footer";
import Header from './components/Header';
import Link from 'next/link';

export default function Home() {
  const mayaLanguages = [
    { name: "K'iche'", color: "#c0392b", speakers: "1,000,000+", region: "Guatemala Central", href: "/kicheLeccion" },
    { name: "Q'eqchi'", color: "#2471a3", speakers: "800,000+", region: "Alta Verapaz, Petén", href: "/qeqchiLeccion" },
    { name: "Kaqchikel", color: "#1e8449", speakers: "500,000+", region: "Altiplano Central", href: "/kaqchikelLeccion" },
    { name: "Mam", color: "#d68910", speakers: "500,000+", region: "Occidente de Guatemala", href: "/mamLeccion" },
    { name: "Tz'utujil", color: "#7d3c98", speakers: "100,000+", region: "Lago de Atitlán", href: "/tzutujilLeccion" },
  ];

  const stats = [
    { value: "5", label: "Idiomas Mayas" },
    { value: "3M+", label: "Hablantes" },
    { value: "22", label: "Departamentos" },
    { value: "50+", label: "Lecciones" },
  ];

  const features = [
    {
      title: "Lecciones Interactivas",
      description: "Actividades diseñadas por expertos en lenguas y cultura maya.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Contexto Cultural",
      description: "Comprende el patrimonio e historia detrás de cada idioma.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Pronunciación",
      description: "Guías fonéticas detalladas para dominar los sonidos únicos del maya.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: "Alcance Nacional",
      description: "Diseñado para los 22 departamentos de Guatemala y la comunidad internacional.",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const mission = [
    {
      title: "Preservación Cultural",
      description: "Mantenemos vivas las lenguas mayas y promovemos su uso activo entre las nuevas generaciones de Guatemala.",
    },
    {
      title: "Puentes Lingüísticos",
      description: "Creamos conexiones entre comunidades hispanohablantes y mayas a través del aprendizaje mutuo del idioma.",
    },
    {
      title: "Cobertura Nacional",
      description: "Llegamos a los 22 departamentos de Guatemala con contenido educativo accesible y culturalmente relevante.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1b3a6b]" style={{ minHeight: '520px' }}>
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Guatemala"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/patterns/maya-pattern.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c8a217]/20 border border-[#c8a217]/40 rounded text-[#e8be2c] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8a217] flex-shrink-0"></span>
              Plataforma educativa · Guatemala
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Aprende las{' '}
              <span className="text-[#e8be2c]">Lenguas Mayas</span>{' '}
              de Guatemala
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
              Una plataforma educativa para preservar y difundir los cinco idiomas mayas más hablados. Diseñada para Guatemala y el mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/lecciones"
                className="px-8 py-3.5 bg-[#c8a217] text-[#0f2347] font-bold rounded hover:bg-[#e8be2c] transition-colors text-center text-sm"
              >
                Explorar Idiomas
              </Link>
              <Link
                href="/nosotros"
                className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded border border-white/30 hover:bg-white/20 transition-colors text-center text-sm"
              >
                Sobre Nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-white border-b border-[#dde3f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center py-2 ${i > 0 ? 'border-l border-[#dde3f0]' : ''}`}>
                <div className="text-3xl font-bold text-[#1b3a6b]">{stat.value}</div>
                <div className="text-xs text-[#6b7a9e] mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages */}
      <section className="py-16 md:py-20 bg-[#f5f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-2">Lenguas Mayas</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b]">Los 5 Idiomas Mayas de Guatemala</h2>
            <p className="text-[#6b7a9e] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Cada idioma representa una comunidad única con su propia historia, cosmovisión y patrimonio cultural milenario.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mayaLanguages.map((lang, i) => (
              <Link
                key={i}
                href={lang.href}
                className="group bg-white rounded-xl border border-[#dde3f0] overflow-hidden hover:shadow-lg hover:border-transparent transition-all duration-300"
              >
                <div className="h-1.5" style={{ backgroundColor: lang.color }}></div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a2035] text-base mb-2">{lang.name}</h3>
                  <p className="text-xs text-[#6b7a9e] mb-0.5">{lang.speakers} hablantes</p>
                  <p className="text-xs text-[#6b7a9e] mb-4">{lang.region}</p>
                  <div className="flex items-center text-xs font-semibold text-[#1b3a6b] group-hover:text-[#c8a217] transition-colors">
                    Ver lecciones
                    <svg className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-2">Plataforma</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b]">¿Por qué elegir Astro Maya?</h2>
            <p className="text-[#6b7a9e] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Diseñada para hacer el aprendizaje de idiomas efectivo, atractivo y culturalmente relevante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="p-6 bg-[#f5f7fc] rounded-xl border border-[#dde3f0] hover:border-[#1b3a6b]/20 transition-colors">
                <div className="w-9 h-9 bg-[#1b3a6b] rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[#1a2035] mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-[#6b7a9e] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-[#f5f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-2">Misión</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b]">Nuestra Misión</h2>
            <p className="text-[#6b7a9e] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Comprometidos con la preservación y difusión de las lenguas mayas de Guatemala para las generaciones actuales y futuras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mission.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#dde3f0] p-8 hover:shadow-md transition-shadow">
                <div className="w-8 h-0.5 bg-[#c8a217] mb-5"></div>
                <h3 className="font-bold text-[#1a2035] mb-3 text-base">{item.title}</h3>
                <p className="text-sm text-[#6b7a9e] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1b3a6b]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu viaje lingüístico?
          </h2>
          <p className="text-white/65 mb-8 text-base leading-relaxed max-w-xl mx-auto">
            Únete a miles de estudiantes que descubren la riqueza cultural de las lenguas mayas de Guatemala.
          </p>
          <Link
            href="/lecciones"
            className="inline-block px-10 py-4 bg-[#c8a217] text-[#0f2347] font-bold rounded hover:bg-[#e8be2c] transition-colors"
          >
            Ver todos los cursos
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
