import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprende Tz'utujil — Vocabulario, Frases y Lecciones Gratis",
  description: "Aprende Tz'utujil, idioma maya del lago Atitlán, Guatemala. Lecciones gratuitas de vocabulario, frases, gramática y notas culturales del pueblo Tz'utujil.",
  keywords: [
    "aprender tzutujil gratis",
    "tzutujil idioma maya",
    "vocabulario tzutujil",
    "frases en tzutujil",
    "idioma tzutujil atitlan",
    "tz'utujil lecciones",
    "tzutujil online",
    "lengua maya tzutujil",
    "idioma lago atitlan",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com/tzutujilLeccion" },
  openGraph: {
    title: "Aprende Tz'utujil Gratis — Astro Maya",
    description: "Tz'utujil es el idioma maya del lago Atitlán, Guatemala. Empieza a aprender gratis.",
    url: "https://astromaya.neuralcodelab.com/tzutujilLeccion",
    type: "website",
  },
};

export default function TzutujilLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de Tz'utujil — Astro Maya",
            description: "Aprende Tz'utujil, idioma maya del lago Atitlán, Guatemala.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Astro Maya",
              url: "https://astromaya.neuralcodelab.com",
            },
            hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", inLanguage: "es" },
            educationalLevel: "Beginner",
            isAccessibleForFree: true,
            about: { "@type": "Language", name: "Tz'utujil" },
          }),
        }}
      />
      {children}
    </>
  );
}
