import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lecciones de Idiomas Mayas — K'iche', Q'eqchi', Kaqchikel, Mam, Tz'utujil",
  description: "Explora lecciones gratuitas de los 5 idiomas mayas más hablados de Guatemala. Vocabulario, frases esenciales, gramática y notas culturales. Sin registro requerido.",
  keywords: [
    "lecciones idiomas mayas gratis",
    "vocabulario kiche",
    "frases qeqchi",
    "aprender kaqchikel",
    "lecciones mam",
    "tzutujil vocabulario",
    "idiomas mayas online",
    "cursos gratuitos lenguas mayas",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com/lecciones" },
  openGraph: {
    title: "Lecciones de Idiomas Mayas — Astro Maya",
    description: "Explora lecciones gratuitas de K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil. Sin registro.",
    url: "https://astromaya.neuralcodelab.com/lecciones",
    type: "website",
  },
};

export default function LeccionesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
