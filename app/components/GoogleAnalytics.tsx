'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Google Analytics se carga solo si la persona aceptó en el aviso de cookies.
// El aviso guarda la respuesta en localStorage y avisa con el evento CONSENT_EVENT.
export const GA_ID = 'G-1Q9GZKZF0V';
export const COOKIE_KEY = 'astromaya_cookies';
export const CONSENT_EVENT = 'astromaya:cookies';

export default function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setAccepted(localStorage.getItem(COOKIE_KEY) === 'accepted');
      } catch {
        setAccepted(false);
      }
    };
    read();
    window.addEventListener(CONSENT_EVENT, read);
    return () => window.removeEventListener(CONSENT_EVENT, read);
  }, []);

  if (!accepted) return null;

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
