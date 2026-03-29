import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprende Kaqchikel — Vocabulario, Frases y Lecciones Gratis",
  description: "Aprende Kaqchikel, idioma maya del altiplano central de Guatemala con más de 500,000 hablantes. Lecciones gratuitas de vocabulario, frases y gramática.",
  keywords: [
    "aprender kaqchikel gratis",
    "kaqchikel idioma maya",
    "vocabulario kaqchikel",
    "frases en kaqchikel",
    "idioma kaqchikel guatemala",
    "cakchiquel lecciones",
    "kaqchikel online",
    "lengua maya kaqchikel",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com/kaqchikelLeccion" },
  openGraph: {
    title: "Aprende Kaqchikel Gratis — Astro Maya",
    description: "Kaqchikel es el idioma maya del altiplano central de Guatemala. +500,000 hablantes. Empieza gratis.",
    url: "https://astromaya.neuralcodelab.com/kaqchikelLeccion",
    type: "website",
  },
};

export default function KaqchikelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de Kaqchikel — Astro Maya",
            description: "Aprende Kaqchikel, idioma maya del altiplano central de Guatemala.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Astro Maya",
              url: "https://astromaya.neuralcodelab.com",
            },
            hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", inLanguage: "es" },
            educationalLevel: "Beginner",
            isAccessibleForFree: true,
            about: { "@type": "Language", name: "Kaqchikel", alternateName: "Cakchiquel" },
          }),
        }}
      />
      {children}
    </>
  );
}
