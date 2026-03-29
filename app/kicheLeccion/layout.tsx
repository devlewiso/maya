import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprende K'iche' — Vocabulario, Frases y Lecciones Gratis",
  description: "Aprende K'iche', el idioma maya más hablado de Guatemala con más de 1 millón de hablantes. Lecciones gratuitas de vocabulario, frases, gramática y notas culturales.",
  keywords: [
    "aprender kiche gratis",
    "kiche idioma maya",
    "vocabulario kiche",
    "frases en kiche",
    "idioma kiche guatemala",
    "k'iche' lecciones",
    "kiche online",
    "lengua maya kiche",
    "aprender quiche guatemalteco",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com/kicheLeccion" },
  openGraph: {
    title: "Aprende K'iche' Gratis — Astro Maya",
    description: "K'iche' es el idioma maya más hablado de Guatemala con más de 1 millón de hablantes. Empieza a aprender hoy.",
    url: "https://astromaya.neuralcodelab.com/kicheLeccion",
    type: "website",
  },
};

export default function KicheLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de K'iche' — Astro Maya",
            description: "Aprende K'iche', el idioma maya más hablado de Guatemala. Vocabulario, frases, gramática y notas culturales.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Astro Maya",
              url: "https://astromaya.neuralcodelab.com",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              inLanguage: "es",
            },
            educationalLevel: "Beginner",
            isAccessibleForFree: true,
            inLanguage: "quc",
            about: { "@type": "Language", name: "K'iche'", alternateName: "Quiché" },
          }),
        }}
      />
      {children}
    </>
  );
}
