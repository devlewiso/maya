// Hoja de la constancia de logro (A4 horizontal). Componente de presentación: sin estado, sirve en servidor.
// Al imprimir solo se ve esta hoja (ver .constancia-hoja en globals.css).

type Props = {
  nombre: string
  idioma: string
  ruta: string
  titulo: string
  lecciones: number
  xp: number
  fecha: string
  codigo: string
  urlVerificar: string
}

const AZUL = '#1b3a6b'
const ORO = '#c8a217'
const JADE = '#1b5e3b'
const PAPEL = '#fbf7ec'

// Greca escalonada (motivo geométrico de grecas mayas), repetida a lo largo del marco.
const Greca = ({ id }: { id: string }) => (
  <pattern id={id} width="40" height="20" patternUnits="userSpaceOnUse">
    <path d="M0 18 H8 V6 H20 V14 H14 V10 H12 V18 H28 V2 H40" fill="none" stroke={ORO} strokeWidth="2" />
  </pattern>
)

// Sol con rayos: adorno de las esquinas.
const Sol = ({ x, y }: { x: number; y: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="16" fill="none" stroke={ORO} strokeWidth="2" />
    <circle r="9" fill={ORO} opacity="0.85" />
    <circle r="4" fill={PAPEL} />
    {Array.from({ length: 8 }, (_, i) => (
      <rect key={i} x="-2" y="-28" width="4" height="8" fill={ORO} transform={`rotate(${i * 45})`} />
    ))}
  </g>
)

export default function Constancia(p: Props) {
  return (
    <div className="constancia-hoja mx-auto w-full max-w-[1100px] shadow-2xl print:shadow-none" style={{ aspectRatio: '297 / 210', background: PAPEL, position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 1188 840" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
        <defs>
          <Greca id="greca-h" />
        </defs>
        {/* marco: banda de greca entre dos filetes */}
        <rect x="24" y="24" width="1140" height="792" fill="none" stroke={AZUL} strokeWidth="3" />
        <rect x="36" y="36" width="1116" height="20" fill="url(#greca-h)" />
        <rect x="36" y="784" width="1116" height="20" fill="url(#greca-h)" transform="rotate(180 594 794)" />
        <rect x="36" y="36" width="20" height="768" fill="none" stroke={ORO} strokeWidth="2" />
        <rect x="1132" y="36" width="20" height="768" fill="none" stroke={ORO} strokeWidth="2" />
        <rect x="64" y="64" width="1060" height="712" fill="none" stroke={AZUL} strokeWidth="1" opacity="0.5" />
        <Sol x={46} y={46} />
        <Sol x={1142} y={46} />
        <Sol x={46} y={794} />
        <Sol x={1142} y={794} />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center text-center" style={{ padding: '7% 10% 8%', color: '#1a2035' }}>
        <p className="tracking-[0.45em] text-[clamp(9px,1.2vw,13px)] font-bold" style={{ color: JADE }}>ASTRO MAYA</p>
        <h1 className="mt-[1.5%] text-[clamp(22px,4.2vw,48px)] leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: AZUL }}>
          Constancia de Logro
        </h1>
        <div className="my-[1.6%] h-[2px] w-[22%]" style={{ background: ORO }} />
        <p className="text-[clamp(10px,1.4vw,16px)]" style={{ color: '#6b7a9e' }}>Se reconoce con alegría a</p>
        <p className="mt-[1.2%] text-[clamp(22px,4vw,46px)] font-semibold leading-tight" style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#1a2035' }}>
          {p.nombre}
        </p>
        <p className="mt-[1.6%] max-w-[78%] text-[clamp(10px,1.45vw,17px)] leading-relaxed">
          por completar la <b style={{ color: AZUL }}>{p.ruta}</b> del idioma <b style={{ color: JADE }}>{p.idioma}</b>
          {p.titulo && p.titulo !== p.ruta ? <> — «{p.titulo}»</> : null}, con dedicación y respeto por las lenguas mayas de Guatemala.
        </p>

        <div className="mt-[2.4%] flex gap-[6%] text-[clamp(9px,1.25vw,15px)]">
          <div><p className="font-bold text-[clamp(14px,2.2vw,26px)]" style={{ color: AZUL }}>{p.lecciones}</p><p style={{ color: '#6b7a9e' }}>lecciones</p></div>
          <div><p className="font-bold text-[clamp(14px,2.2vw,26px)]" style={{ color: ORO }}>{p.xp}</p><p className="whitespace-nowrap" style={{ color: '#6b7a9e' }}>XP ganados</p></div>
          <div><p className="whitespace-nowrap font-bold text-[clamp(14px,2.2vw,26px)]" style={{ color: JADE }}>{p.fecha}</p><p style={{ color: '#6b7a9e' }}>fecha</p></div>
        </div>

        <div className="mt-auto flex w-full items-end justify-between text-left text-[clamp(8px,1.05vw,13px)]">
          <div>
            <div className="mb-1 h-px w-[220px] max-w-[30vw]" style={{ background: AZUL }} />
            <p className="font-semibold" style={{ color: AZUL }}>Equipo Astro Maya</p>
            <p style={{ color: '#6b7a9e' }}>astromaya.neuralcodelab.com</p>
          </div>
          <div className="text-right">
            <p style={{ color: '#6b7a9e' }}>Código de verificación</p>
            <p className="font-mono font-bold tracking-wider" style={{ color: AZUL }}>{p.codigo}</p>
            <p style={{ color: '#6b7a9e' }}>{p.urlVerificar.replace(/^https?:\/\//, '')}</p>
          </div>
        </div>

        <p className="mt-[1.6%] max-w-[85%] text-[clamp(7px,0.85vw,11px)] leading-snug" style={{ color: '#8a93ad' }}>
          Reconocimiento simbólico de Astro Maya por el aprendizaje realizado en la plataforma. No es un certificado académico
          oficial ni está avalado por la Academia de Lenguas Mayas de Guatemala (ALMG), el MINEDUC u otra institución.
        </p>
      </div>
    </div>
  )
}
