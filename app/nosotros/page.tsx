import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Nosotros() {
  const tiers = [
    {
      name: 'Gratuito',
      price: 'Q0',
      period: 'para siempre',
      color: '#1b5e3b',
      description: 'Acceso básico para cualquier persona que quiera aprender.',
      audience: 'Individuos, estudiantes, comunidades',
      features: [
        'Acceso a los 5 idiomas mayas principales',
        'Lecciones introductorias por idioma',
        'Vocabulario, frases y pronunciación básica',
        'Notas culturales e históricas',
        'Sin registro requerido',
      ],
      cta: 'Comenzar gratis',
      href: '/lecciones',
      featured: false,
    },
    {
      name: 'Institucional',
      price: 'Q500',
      period: 'por mes',
      color: '#1b3a6b',
      description: 'Para escuelas, municipalidades, ONG y universidades de Guatemala.',
      audience: 'Instituciones educativas y gubernamentales',
      features: [
        'Todo lo del plan gratuito',
        'Currículo completo por idioma (10+ lecciones)',
        'Panel de administración docente',
        'Seguimiento de progreso por estudiante',
        'Certificados de completitud',
        'Cobertura en los 22 departamentos',
        'Soporte prioritario en español',
      ],
      cta: 'Solicitar demo',
      href: 'mailto:devlewiso@gmail.com?subject=Demo Institucional Astro Maya',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'A medida',
      period: 'contrato anual',
      color: '#c8a217',
      description: 'Para organizaciones grandes, gobierno central e instituciones internacionales.',
      audience: 'Gobiernos, ONGs internacionales, universidades',
      features: [
        'Todo lo del plan Institucional',
        'Acceso a los 22 idiomas mayas de Guatemala',
        'Marca blanca / white label',
        'Integración via API',
        'Desarrollo de contenido personalizado',
        'Soporte dedicado 24/7',
        'Contratos multianuales disponibles',
      ],
      cta: 'Contáctanos',
      href: 'mailto:devlewiso@gmail.com?subject=Enterprise Astro Maya',
      featured: false,
    },
  ];

  const values = [
    {
      title: 'Accesibilidad',
      description: 'La enseñanza básica de lenguas mayas es un derecho. Nuestro nivel gratuito garantiza que cualquier guatemalteco pueda acceder sin barreras económicas.',
    },
    {
      title: 'Autenticidad',
      description: 'Trabajamos con comunidades y hablantes nativos para asegurar que el contenido sea lingüística y culturalmente preciso.',
    },
    {
      title: 'Escala Nacional',
      description: 'Diseñado para los 22 departamentos de Guatemala, con sensibilidad a las variantes regionales de cada idioma.',
    },
    {
      title: 'Visión Internacional',
      description: 'La diáspora guatemalteca, universidades extranjeras y organizaciones culturales también son parte de nuestra comunidad.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fc]">
      <Header />

      {/* Hero */}
      <section className="bg-[#1b3a6b] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-3">Sobre Nosotros</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Preservando las lenguas mayas<br className="hidden md:block" /> de Guatemala
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Astro Maya es una plataforma educativa con misión social: ofrecer enseñanza primaria de los idiomas mayas de forma gratuita, y soluciones institucionales para quienes necesitan más.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-3">Nuestra Misión</div>
              <h2 className="text-3xl font-bold text-[#1b3a6b] mb-5">
                El idioma como puente, no como barrera
              </h2>
              <p className="text-[#6b7a9e] leading-relaxed mb-4">
                Guatemala cuenta con 22 lenguas mayas reconocidas oficialmente, habladas por más de 3 millones de personas en todo el territorio nacional. Sin embargo, el acceso a recursos educativos de calidad para aprenderlas sigue siendo limitado.
              </p>
              <p className="text-[#6b7a9e] leading-relaxed mb-4">
                Astro Maya nace para cambiar eso. Creemos que la enseñanza primaria de lenguas mayas debe ser gratuita y accesible para cualquier persona — sea estudiante, maestro, funcionario público o ciudadano curioso.
              </p>
              <p className="text-[#6b7a9e] leading-relaxed">
                Para instituciones que necesitan currículos completos, herramientas de gestión y soporte profesional, ofrecemos planes institucionales y empresariales que financian la sostenibilidad del proyecto.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="bg-[#f5f7fc] rounded-xl border border-[#dde3f0] p-5">
                  <div className="w-6 h-0.5 bg-[#c8a217] mb-3"></div>
                  <h3 className="font-bold text-[#1a2035] text-sm mb-2">{v.title}</h3>
                  <p className="text-xs text-[#6b7a9e] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-[#f5f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-3">Planes</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b]">Acceso para todos, escala para instituciones</h2>
            <p className="text-[#6b7a9e] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              La enseñanza básica siempre será gratuita. Los planes institucionales financian el desarrollo de más contenido y nuevos idiomas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col ${
                  tier.featured
                    ? 'border-[#1b3a6b] shadow-xl shadow-[#1b3a6b]/10'
                    : 'border-[#dde3f0] shadow-sm'
                }`}
              >
                {tier.featured && (
                  <div className="bg-[#1b3a6b] text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                    Más popular
                  </div>
                )}
                <div className="h-1" style={{ backgroundColor: tier.color }}></div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-5">
                    <h3 className="font-bold text-[#1a2035] text-lg mb-1">{tier.name}</h3>
                    <p className="text-xs text-[#6b7a9e] mb-4">{tier.audience}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#1b3a6b]">{tier.price}</span>
                      <span className="text-xs text-[#6b7a9e]">/{tier.period}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b7a9e] mb-5 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#1a2035]">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tier.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className="block text-center px-5 py-3 rounded font-semibold text-sm transition-colors"
                    style={{
                      backgroundColor: tier.featured ? '#1b3a6b' : `${tier.color}15`,
                      color: tier.featured ? '#ffffff' : tier.color,
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#c8a217] font-semibold text-xs uppercase tracking-widest mb-3">Equipo</div>
          <h2 className="text-3xl font-bold text-[#1b3a6b] mb-5">Construido con propósito</h2>
          <p className="text-[#6b7a9e] leading-relaxed max-w-2xl mx-auto mb-4">
            Somos un equipo de lingüistas, educadores y desarrolladores apasionados por las lenguas indígenas y la tecnología educativa. Colaboramos directamente con comunidades mayas para garantizar autenticidad y respeto cultural en cada lección.
          </p>
          <p className="text-[#6b7a9e] leading-relaxed max-w-2xl mx-auto mb-8">
            Estamos abiertos a alianzas con instituciones educativas, municipalidades, ministerios y organizaciones culturales que compartan nuestra visión.
          </p>
          <a
            href="mailto:devlewiso@gmail.com"
            className="inline-block px-8 py-3.5 bg-[#1b3a6b] text-white font-semibold rounded hover:bg-[#254d8f] transition-colors text-sm"
          >
            Escribenos a devlewiso@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
