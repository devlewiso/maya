'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const DISMISS_KEY = 'astromaya_referral_banner';
export const REFERRAL_URL = 'https://higgsfield.ai?fpr=iran-692b24';

export default function ReferralBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(DISMISS_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, 'dismissed');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-[#101418] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-center pr-8 sm:pr-10">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/85">
            <span>
              ¿Creas contenido sobre cultura maya?{' '}
              <span className="hidden sm:inline">Genera videos e imágenes con IA en </span>
              <strong className="text-[#e6b647] font-semibold">Higgsfield</strong>
            </span>
          </span>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#d9a62b] text-[#101418] text-xs font-bold rounded-full hover:bg-[#e6b647] transition-colors whitespace-nowrap"
          >
            Probar gratis
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <Link
            href="/herramientas"
            className="hidden sm:inline text-xs font-medium text-white/60 underline underline-offset-2 hover:text-white transition-colors whitespace-nowrap"
          >
            Saber más
          </Link>
        </div>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xl leading-none"
        aria-label="Cerrar aviso"
      >
        ×
      </button>
    </div>
  );
}
