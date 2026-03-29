import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprende Q'eqchi' — Vocabulario, Frases y Lecciones Gratis",
  description: "Aprende Q'eqchi', idioma maya hablado en Alta Verapaz y Petén con más de 800,000 hablantes. Lecciones gratuitas de vocabulario, frases y gramática.",
  keywords: [
    "aprender qeqchi gratis",
    "qeqchi idioma maya",
    "vocabulario qeqchi",
    "frases en qeqchi",
    "idioma qeqchi alta verapaz",
    "q'eqchi lecciones",
    "kekchi online",
    "lengua maya qeqchi",
  ],
  alternates: { canonical: "https://astromaya.neuralcodelab.com/qeqchiLeccion" },
  openGraph: {
    title: "Aprende Q'eqchi' Gratis — Astro Maya",
    description: "Q'eqchi' es el idioma maya de Alta Verapaz y Petén. Más de 800,000 hablantes. Empieza gratis.",
    url: "https://astromaya.neuralcodelab.com/qeqchiLeccion",
    type: "website",
  },
};

export default function QeqchiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de Q'eqchi' — Astro Maya",
            description: "Aprende Q'eqchi', idioma maya de Alta Verapaz y Petén, Guatemala.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Astro Maya",
              url: "https://astromaya.neuralcodelab.com",
            },
            hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", inLanguage: "es" },
            educationalLevel: "Beginner",
            isAccessibleForFree: true,
            about: { "@type": "Language", name: "Q'eqchi'" },
          }),
        }}
      />
      {children}
    </>
  );
}
