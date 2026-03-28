'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'astromaya_cookies';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    // Disable Google Analytics
    // @ts-expect-error GA disable property
    window['ga-disable-G-1Q9GZKZF0V'] = true;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#0f2347] border border-white/10 rounded-xl shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-white font-semibold text-sm mb-1">🍪 Usamos cookies</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Utilizamos Google Analytics para mejorar la plataforma. No recopilamos datos personales identificables.
              Puede aceptar, rechazar o{' '}
              <Link href="/cookies" className="text-[#c8a217] underline hover:text-[#e8be2c]">
                conocer más
              </Link>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="px-5 py-2.5 bg-white/10 text-white text-xs font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="px-5 py-2.5 bg-[#c8a217] text-[#0f2347] text-xs font-bold rounded hover:bg-[#e8be2c] transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
