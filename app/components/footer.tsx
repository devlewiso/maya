import Link from 'next/link';
import { LANGUAGES, LogoMark } from './Tejido';

interface FooterProps {
  mayaLanguages?: Array<{
    name: string;
    color: string;
    speakers: string;
    region: string;
  }>;
}

const linkClass = 'text-[#b9bfc9] hover:text-white text-sm transition-colors py-1 inline-block';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = (_props: FooterProps) => {
  return (
    <footer className="bg-[#101418] text-white border-t border-[#262d37]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark size={32} />
              <span className="font-extrabold text-lg tracking-tight">Astro Maya</span>
            </div>
            <p className="text-[#b9bfc9] text-sm leading-relaxed mb-5 max-w-sm">
              Plataforma educativa para aprender y preservar los idiomas mayas de Guatemala.
            </p>
            <a href="mailto:devlewiso@gmail.com" className="text-[#d9a62b] text-sm hover:text-[#e6b647] transition-colors">
              devlewiso@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d9a62b] mb-4">Idiomas</h3>
            <ul className="space-y-1">
              {LANGUAGES.map((lang) => (
                <li key={lang.href}>
                  <Link href={lang.href} className={linkClass}>{lang.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d9a62b] mb-4">Astro Maya</h3>
            <ul className="space-y-1">
              <li><Link href="/lecciones" className={linkClass}>Lecciones</Link></li>
              <li><Link href="/herramientas" className={linkClass}>Herramientas</Link></li>
              <li><Link href="/nosotros" className={linkClass}>Nosotros</Link></li>
              <li><a href="mailto:devlewiso@gmail.com" className={linkClass}>Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8a919c] text-xs">
            © {new Date().getFullYear()} Astro Maya · Guatemala
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-5 justify-center">
            <Link href="/privacidad" className="text-[#8a919c] hover:text-white text-xs transition-colors">Privacidad</Link>
            <Link href="/cookies" className="text-[#8a919c] hover:text-white text-xs transition-colors">Cookies</Link>
            <Link href="/terminos" className="text-[#8a919c] hover:text-white text-xs transition-colors">Términos</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
