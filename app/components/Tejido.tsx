import { useId } from 'react';

// Elementos de marca del sistema visual «Tejido».

/** Banda de rombos inspirada en el huipil. Solo como borde de secciones oscuras o tarjetas destacadas. */
export function TejidoBand({ height = 14, color = '#d9a62b' }: { height?: number; color?: string }) {
  const id = useId();
  const w = height * 2;
  const h = height / 2;
  return (
    <svg width="100%" height={height} aria-hidden="true" className="block">
      <defs>
        <pattern id={id} width={w} height={height} patternUnits="userSpaceOnUse">
          <path d={`M0 ${h} L${h} 0 L${height} ${h} L${h} ${height} Z`} fill={color} />
          <path d={`M${height} ${h} L${height + h} 0 L${w} ${h} L${height + h} ${height} Z`} fill="none" stroke={color} strokeWidth={1.5} />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${id})`} />
    </svg>
  );
}

/** Número en numeración maya (punto = 1, barra = 5), para pasos y niveles del 1 al 19. */
export function MayaNumeral({ value, color = '#14181f' }: { value: number; color?: string }) {
  const bars = Math.floor(value / 5);
  const dots = value % 5;
  return (
    <span role="img" aria-label={`${value} en numeración maya`} className="inline-flex flex-col items-center gap-1.5">
      {dots > 0 && (
        <span className="flex gap-1.5">
          {Array.from({ length: dots }, (_, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
          ))}
        </span>
      )}
      {Array.from({ length: bars }, (_, i) => (
        <span key={i} className="w-12 h-2.5 rounded-[3px]" style={{ background: color }} />
      ))}
    </span>
  );
}

/** Marca de Astro Maya: rombo maíz sobre jade. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
      <rect x="1" y="1" width="30" height="30" rx="6" fill="#0e5c4a" />
      <path d="M16 7 L25 16 L16 25 L7 16 Z" fill="none" stroke="#d9a62b" strokeWidth="2" />
      <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
    </svg>
  );
}

export const LANGUAGES = [
  { name: "K'iche'", href: '/kicheLeccion', color: '#a3362a', region: 'Guatemala central' },
  { name: "Q'eqchi'", href: '/qeqchiLeccion', color: '#2c4a8c', region: 'Alta Verapaz y Petén' },
  { name: 'Kaqchikel', href: '/kaqchikelLeccion', color: '#1e7a55', region: 'Altiplano central' },
  { name: 'Mam', href: '/mamLeccion', color: '#b07a12', region: 'Occidente de Guatemala' },
  { name: "Tz'utujil", href: '/tzutujilLeccion', color: '#6a3f8c', region: 'Lago de Atitlán' },
] as const;
