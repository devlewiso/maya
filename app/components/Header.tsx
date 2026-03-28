'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/lecciones', label: 'Lecciones' },
  { href: '/nosotros', label: 'Nosotros' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Institutional top bar */}
      <div className="hidden md:block bg-[#0f2347] text-white/70 text-xs text-center py-1.5 px-4">
        Plataforma nacional de preservación y aprendizaje de las lenguas mayas de Guatemala
      </div>

      {/* Main nav */}
      <div className={`bg-white ${!isScrolled ? 'border-b border-[#dde3f0]' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo + wordmark */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/astromaya-logo.svg"
                alt="Astro Maya"
                width={96}
                height={32}
                className="shrink-0"
              />
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
              <Link
                href="/lecciones"
                className="ml-4 px-5 py-2 bg-[#1b3a6b] text-white text-sm font-semibold rounded hover:bg-[#254d8f] transition-colors"
              >
                Comenzar →
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-[#dde3f0] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 shadow-lg' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#1b3a6b] bg-[#f5f7fc] font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/lecciones"
            className="mt-2 px-4 py-3 bg-[#1b3a6b] text-white text-sm font-bold rounded text-center hover:bg-[#254d8f] transition-colors"
          >
            Comenzar a Aprender →
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
