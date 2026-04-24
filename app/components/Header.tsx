'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/lecciones', label: 'Lecciones' },
  { href: '/nosotros', label: 'Nosotros' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoadingAuth(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

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
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="hidden md:block bg-[#0f2347] text-white/70 text-xs text-center py-1.5 px-4">
        Plataforma nacional de preservación y aprendizaje de las lenguas mayas de Guatemala
      </div>

      <div className={`bg-white ${!isScrolled ? 'border-b border-[#dde3f0]' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/astromaya-logo.svg" alt="Astro Maya" width={96} height={32} className="shrink-0" />
              <div className="hidden sm:block leading-tight">
                <div className="text-[#1b3a6b] font-bold text-base">Astro Maya</div>
                <div className="text-[#6b7a9e] text-[10px] font-medium uppercase tracking-wider">Lenguas Mayas · Guatemala</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-[#1b3a6b] bg-[#f5f7fc] font-semibold'
                      : 'text-gray-600 hover:text-[#1b3a6b] hover:bg-[#f5f7fc]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Auth buttons */}
              {!loadingAuth && (
                <div className="flex items-center gap-2 ml-4">
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="px-4 py-2 text-sm font-semibold text-[#1b3a6b] hover:bg-[#f5f7fc] rounded transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-sm font-semibold text-[#6b7a9e] hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        Salir
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="px-4 py-2 text-sm font-semibold text-[#1b3a6b] hover:bg-[#f5f7fc] rounded transition-colors"
                      >
                        Iniciar sesión
                      </Link>
                      <Link
                        href="/signup"
                        className="px-5 py-2 bg-[#c8a217] text-[#0f2347] text-sm font-bold rounded hover:bg-[#e8be2c] transition-colors"
                      >
                        Registrarse
                      </Link>
                    </>
                  )}
                </div>
              )}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
                ) : (
                  <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-[#dde3f0] overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen shadow-lg' : 'max-h-0'}`}>
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                pathname === link.href ? 'text-[#1b3a6b] bg-[#f5f7fc] font-semibold' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {!loadingAuth && (
            user ? (
              <>
                <Link href="/dashboard" className="px-4 py-3 rounded text-sm font-semibold text-[#1b3a6b] hover:bg-[#f5f7fc]">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-3 rounded text-sm font-semibold text-left text-red-600 hover:bg-red-50"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-4 py-3 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Iniciar sesión
                </Link>
                <Link href="/signup" className="mt-1 px-4 py-3 bg-[#c8a217] text-[#0f2347] text-sm font-bold rounded text-center hover:bg-[#e8be2c] transition-colors">
                  Registrarse gratis
                </Link>
              </>
            )
          )}
        </nav>
      </div>

      {/* Banner de registro funcionando */}
      {!loadingAuth && !user && showBanner && (
        <div className="bg-[#c8a217] text-[#0f2347] text-[11px] font-semibold text-center py-1.5 px-4 relative">
          <span className="inline-flex items-center gap-1">
            🎉 ¡Registro activo! Ya puedes crear tu cuenta gratis
          </span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0f2347]/60 hover:text-[#0f2347] text-lg leading-none"
            aria-label="Cerrar banner"
          >
            ×
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
