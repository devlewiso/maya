'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COOKIE_KEY, CONSENT_EVENT } from './GoogleAnalytics';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  // Guarda la respuesta y avisa a <GoogleAnalytics/>, que solo carga GA si fue «accepted».
  const answer = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {}
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#101418] border border-white/10 rounded-xl shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-white font-semibold text-sm mb-1">🍪 Usamos cookies</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Si acepta, usamos Google Analytics para medir cómo se usa la plataforma. Si rechaza, no se carga.
              Puede aceptar, rechazar o{' '}
              <Link href="/cookies" className="text-[#8a6410] underline hover:text-[#e6b647]">
                conocer más
              </Link>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => answer('declined')}
              className="px-5 py-2.5 bg-white/10 text-white text-xs font-semibold rounded border border-white/20 hover:bg-white/20 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={() => answer('accepted')}
              className="px-5 py-2.5 bg-[#d9a62b] text-[#101418] text-xs font-bold rounded hover:bg-[#e6b647] transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
