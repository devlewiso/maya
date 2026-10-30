'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { LogoMark } from './Tejido';

const navLinks = [
  { href: '/lecciones', label: 'Lecciones' },
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/nosotros', label: 'Nosotros' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user ?? null;
  const loadingAuth = isPending;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  async function handleSignOut() {
    await authClient.signOut();
    router.push('/');
    router.refresh();
  }

  const linkClass = (href: string) =>
    `px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      pathname === href ? 'text-[#14181f] bg-[#f6f5f1]' : 'text-[#3b4250] hover:text-[#14181f] hover:bg-[#f6f5f1]'
    }`;

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-[#e4e2da] transition-shadow duration-200 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">

          <Link href="/" className="flex items-center gap-2.5 text-[#14181f]">
            <LogoMark size={32} />
            <span className="font-extrabold text-lg tracking-tight">Astro Maya</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Principal" className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {!loadingAuth && (
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2.5 text-sm font-semibold text-[#4a5260] hover:text-[#14181f] rounded-lg transition-colors"
                  >
                    Salir
                  </button>
                  <Link
                    href="/dashboard"
                    className="px-4 py-2.5 bg-[#0e5c4a] text-white text-sm font-semibold rounded-lg hover:bg-[#0a4337] transition-colors"
                  >
                    Mi panel
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="px-4 py-2.5 text-sm font-semibold text-[#14181f] rounded-lg hover:bg-[#f6f5f1] transition-colors">
                    Iniciar sesión
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2.5 bg-[#0e5c4a] text-white text-sm font-semibold rounded-lg hover:bg-[#0a4337] transition-colors"
                  >
                    Crear cuenta gratis
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 rounded-lg text-[#3b4250] hover:bg-[#f6f5f1] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {isMenuOpen ? (
                <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
              ) : (
                <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen border-t border-[#e4e2da]' : 'max-h-0'}`}>
        <nav aria-label="Principal móvil" className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={`${linkClass(link.href)} py-3`}>
              {link.label}
            </Link>
          ))}

          {!loadingAuth && (
            user ? (
              <>
                <Link href="/dashboard" className="px-3.5 py-3 rounded-lg text-sm font-semibold text-[#0e5c4a] hover:bg-[#f6f5f1]">
                  Mi panel
                </Link>
                <button onClick={handleSignOut} className="px-3.5 py-3 rounded-lg text-sm font-semibold text-left text-[#4a5260] hover:bg-[#f6f5f1]">
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-3.5 py-3 rounded-lg text-sm font-medium text-[#3b4250] hover:bg-[#f6f5f1]">
                  Iniciar sesión
                </Link>
                <Link href="/signup" className="mt-1 px-4 py-3 bg-[#0e5c4a] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#0a4337] transition-colors">
                  Crear cuenta gratis
                </Link>
              </>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
