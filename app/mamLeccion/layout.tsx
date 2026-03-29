import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprende Mam — Vocabulario, Frases y Lecciones Gratis",
  description: "Aprende Mam, idioma maya del occidente de Guatemala con más de 500,000 hablantes. Lecciones gratuitas de vocabulario, frases y gramática.",
  keywords: [
    "aprender mam gratis",
    "mam idioma maya",
    "vocabulario mam",
    "frases en mam",
    "idioma mam huehuetenango",
    "mam lecciones",
    "mam online",
    "lengua maya mam",
    "idioma mam san marcos",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com/mamLeccion" },
  openGraph: {
    title: "Aprende Mam Gratis — Astro Maya",
    description: "Mam es el idioma maya del occidente de Guatemala. +500,000 hablantes. Empieza gratis.",
    url: "https://astromaya.neuralcodelab.com/mamLeccion",
    type: "website",
  },
};

export default function MamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de Mam — Astro Maya",
            description: "Aprende Mam, idioma maya del occidente de Guatemala (Huehuetenango, San Marcos, Quetzaltenango).",
            provider: {
              "@type": "EducationalOrganization",
              name: "Astro Maya",
              url: "https://astromaya.neuralcodelab.com",
            },
            hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", inLanguage: "es" },
            educationalLevel: "Beginner",
            isAccessibleForFree: true,
            about: { "@type": "Language", name: "Mam" },
          }),
        }}
      />
      {children}
    </>
  );
}
