'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Close menu when route changes or on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) setIsMenuOpen(false);
    };
    
    window.addEventListener('keydown', handleEsc);
    setIsMenuOpen(false); // Close menu on route change
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="bg-white w-full py-4 px-6 flex items-center justify-between relative shadow-sm fixed top-0 z-50">
      {/* Hamburger button for mobile - Improved with better visibility */}
      <button 
        className="md:hidden z-20 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300"
        >
          {isMenuOpen ? (
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="#4B5563" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          ) : (
            <path 
              d="M4 6H20M4 12H20M4 18H20" 
              stroke="#4B5563" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation - first part */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="/" active={isActive('/')}>
          Inicio
        </NavLink>
        <NavLink href="/kicheLeccion" active={isActive('/kicheLeccion')}>
          K&apos;iche&apos;
        </NavLink>
        <NavLink href="/qeqchiLeccion" active={isActive('/qeqchiLeccion')}>
          Q&apos;eqchi&apos;
        </NavLink>
      </nav>

      {/* Center logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="block group">
          <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
            <Image 
              src="/astromaya-logo.svg" 
              alt="Astro Maya Logo" 
              width={120} 
              height={40} 
              className="cursor-pointer"
            />
          </div>
        </Link>
      </div>

      {/* Desktop navigation - second part */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="/kaqchikelLeccion" active={isActive('/kaqchikelLeccion')}>
          Kaqchikel
        </NavLink>
        <NavLink href="/mamLeccion" active={isActive('/mamLeccion')}>
          Mam
        </NavLink>
        <NavLink href="/tzutujilLeccion" active={isActive('/tzutujilLeccion')}>
          Tz&apos;utujil
        </NavLink>
      </nav>

      {/* Improved mobile menu with better visibility and positioning */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-10 flex flex-col pt-16 items-center justify-start
        transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Mobile menu logo */}
        <div className="mb-8 mt-8">
          <Image 
            src="/astromaya-logo.svg" 
            alt="Astro Maya Logo" 
            width={140} 
            height={50} 
          />
        </div>
        
        <nav className="flex flex-col items-center space-y-6 w-full px-8">
          <MobileNavLink href="/" active={isActive('/')} onClick={toggleMenu}>
            Inicio
          </MobileNavLink>
          <div className="w-full h-px bg-gray-100"></div>
          
          <MobileNavLink href="/kicheLeccion" active={isActive('/kicheLeccion')} onClick={toggleMenu}>
            K&apos;iche&apos;
          </MobileNavLink>
          <div className="w-full h-px bg-gray-100"></div>
          
          <MobileNavLink href="/qeqchiLeccion" active={isActive('/qeqchiLeccion')} onClick={toggleMenu}>
            Q&apos;eqchi&apos;
          </MobileNavLink>
          <div className="w-full h-px bg-gray-100"></div>
          
          <MobileNavLink href="/kaqchikelLeccion" active={isActive('/kaqchikelLeccion')} onClick={toggleMenu}>
            Kaqchikel
          </MobileNavLink>
          <div className="w-full h-px bg-gray-100"></div>
          
          <MobileNavLink href="/mamLeccion" active={isActive('/mamLeccion')} onClick={toggleMenu}>
            Mam
          </MobileNavLink>
          <div className="w-full h-px bg-gray-100"></div>
          
          <MobileNavLink href="/tzutujilLeccion" active={isActive('/tzutujilLeccion')} onClick={toggleMenu}>
            Tz&apos;utujil
          </MobileNavLink>
        </nav>
      </div>
    </header>
  );
};

// Desktop navigation link component
interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`relative font-medium transition-colors ${
        active 
          ? 'text-blue-600' 
          : 'text-gray-800 hover:text-blue-600'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
        active ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
      }`}></span>
    </Link>
  );
};

// Mobile navigation link component
interface MobileNavLinkProps {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, active, onClick, children }: MobileNavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`text-xl font-medium w-full text-center py-2 transition-all duration-300 ${
        active 
          ? 'text-blue-600' 
          : 'text-gray-800 hover:text-blue-600'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;