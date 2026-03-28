import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  mayaLanguages?: Array<{
    name: string;
    color: string;
    speakers: string;
    region: string;
  }>;
}

const languages = [
  { name: "K'iche'", href: '/kicheLeccion' },
  { name: "Q'eqchi'", href: '/qeqchiLeccion' },
  { name: 'Kaqchikel', href: '/kaqchikelLeccion' },
  { name: 'Mam', href: '/mamLeccion' },
  { name: "Tz'utujil", href: '/tzutujilLeccion' },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = (_props: FooterProps) => {
  return (
    <footer className="bg-[#0f2347] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Col 1: Identity */}
          <div>
            <div className="mb-4">
              <Image
                src="/astromaya-logo.svg"
                alt="Astro Maya"
                width={110}
                height={36}
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Plataforma educativa para la preservación y difusión de las lenguas mayas de Guatemala. Conectamos comunidades a través del idioma.
            </p>
            <a
              href="mailto:devlewiso@gmail.com"
              className="text-[#c8a217] text-sm hover:text-[#e8be2c] transition-colors"
            >
              devlewiso@gmail.com
            </a>
          </div>

          {/* Col 2: Languages */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#c8a217] mb-5">
              Idiomas Mayas
            </h3>
            <ul className="space-y-2.5">
              {languages.map((lang) => (
                <li key={lang.href}>
                  <Link
                    href={lang.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {lang.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institution */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest text-[#c8a217] mb-5">
              Institución
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-white/55 hover:text-white text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/lecciones" className="text-white/55 hover:text-white text-sm transition-colors">
                  Lecciones
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-white/55 hover:text-white text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <a href="mailto:devlewiso@gmail.com" className="text-white/55 hover:text-white text-sm transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Astro Maya. Todos los derechos reservados.
          </p>
          <p className="text-white/35 text-xs">
            Guatemala · Preservando el patrimonio lingüístico maya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
